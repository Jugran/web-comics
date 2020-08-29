
from flask import Blueprint, url_for, jsonify
from flask_login import login_required, current_user


bp = Blueprint('main', __name__)


@bp.route('/test')
def main():
    if current_user.is_authenticated:
        return jsonify({'success': True, 'messsage': 'Greetings! ' + current_user.username}), 200, {'Location': url_for('main.main')}
    else:
        return jsonify({'success': True, 'message': 'Not logged in!'}), 200, {'Location': url_for('auth.signup')}

@bp.route('/profile')
@login_required
def profile():
    return jsonify({'success': True, 'message': f'Hello! {current_user.username}'}), 200

