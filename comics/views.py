
from flask import Blueprint, url_for, jsonify
from flask_login import current_user, login_required

from scraper.comics import Comics
from scraper.crawl import crawl

feed = Blueprint('feed', __name__, url_prefix='/feed')

# feed will show all latest subscribed comics
comic_feed = Comics()

@feed.route('/latest')
def latest():
    comics = comic_feed.get(start=0, n=50)
    return jsonify({'comics': comics})

@feed.route('/refresh')
def refresh():
    crawl()
    return jsonify({'success': True, 'message': 'comics updated, please re-fetch'}), 200


viewer = Blueprint('viewer', __name__)

# @viewer.route('/comic', endpoint='comic')
# @login_required
# def image_viewer_get():
#     return "invalid get request"

@viewer.route('/comic/<int:id>', endpoint='comic')
@login_required
def image_viewer(id):
    index = comic_feed.get_index(id=id)
    # return render_template('comics/viewer.html', comics=comic_feed.get(start=index))


@viewer.route('/next', methods=['POST'])
@login_required
def next_comic():
    pass


@viewer.route('/prev', methods=['POST'])
@login_required
def previous_comic():
    pass

