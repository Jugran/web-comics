
from flask import Blueprint, render_template, redirect, url_for, request
from flask_login import current_user, login_required


bp = Blueprint('main', __name__)


@bp.route('/')
def main():
    return render_template('index.html')


@bp.route('/profile')
@login_required
def profile():
    return render_template('profile.html', name=current_user.username)
