
from flask import Blueprint, render_template, redirect, url_for
from flask_login import login_required, current_user


bp = Blueprint('main', __name__)


@bp.route('/')
def main():
    if current_user.is_authenticated:
        return redirect(url_for('main.profile'))
    else:
        return render_template('index.html')

@bp.route('/profile')
@login_required
def profile():
    return render_template('profile.html')
