
from flask import Blueprint, render_template, redirect, url_for, request, flash
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, login_required

from app.models import User, db

bp = Blueprint('auth', __name__)


@bp.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('main'))


@bp.route('/login')
def login():
    return render_template('login.html')


@bp.route('/signup')
def signup():
    return render_template('signup.html')


@bp.route('/signup', methods=['POST'])
def signup_post():
    # code to validate and add user to database goes here

    username = request.form.get('username')
    password = request.form.get('password')

    user = User.query.filter_by(username=username).first()

    if user:
        flash('User already registered!')
        return redirect(url_for('auth.signup'))

    new_user = User(username=username,
                    password=generate_password_hash(password))

    db.session.add(new_user)
    db.session.commit()

    return redirect(url_for('auth.login'))


@bp.route('/login', methods=['POST'])
def login_post():
    username = request.form.get('username')
    password = request.form.get('password')
    remember = True if request.form.get('remember') else False

    if username is None or password is None:
        flash('Enter Username and Password')
        return redirect(url_for('auth.login'))

    user = User.query.filter_by(username=username).first()

    if not user or not check_password_hash(user.password, password):
        flash('Login info incorrect')
        return redirect(url_for('auth.login'))

    login_user(user, remember=remember)
    return redirect(url_for('main.profile'))
