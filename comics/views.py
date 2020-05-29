
from flask import Blueprint, render_template, redirect, url_for, request
from flask_login import current_user, login_required

feed = Blueprint('feed', __name__, url_prefix='/feed')

# feed will show all latest subscribed comics


@feed.route('/')
@login_required
def index():
    return render_template('comics/index.html')


viewer = Blueprint('viewer', __name__)


@viewer.route('/comic', methods=['POST'])
@login_required
def image_viewer():

    return render_template('comics/viewer.html')


@viewer.route('/next', methods=['POST'])
@login_required
def next_comic():
    pass


@viewer.route('/prev', methods=['POST'])
@login_required
def previous_comic():
    pass

