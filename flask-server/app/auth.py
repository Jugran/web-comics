
from flask import Blueprint, request, jsonify, abort
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, login_required

from app.models import User, db

bp = Blueprint('auth', __name__, url_prefix='/auth')


@bp.route('/logout')
@login_required
def logout():
    logout_user()
    return jsonify({'success' : True, 'message': 'User logged out succesfully'}), 201


@bp.route('/signup', methods=['POST'])
def signup():
    # code to validate and add user to database goes here

    username = request.json.get('username')
    password = request.json.get('password')

    if username is None or password is None:
        abort(400) # missing arguments

    user = User.query.filter_by(username=username).first()
    
    if user:
        return jsonify({'success': False, 'message' : 'username already registered'}), 400

    new_user = User(username=username,
                    password=generate_password_hash(password))

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'success': True}), 201


@bp.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')
    remember = request.json.get('remember')

    if username is None or password is None:
        abort(400) # missing arguments

    user = User.query.filter_by(username=username).first()

    if not user or not check_password_hash(user.password, password):
        abort(401)  # wrong credentials

    login_user(user, remember=remember)
    return jsonify({'success': True, 'message': 'User Logged in!', 'data': {'user_id': user.id}}), 200
