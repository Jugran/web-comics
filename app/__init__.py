
from flask import Flask
from flask_login import LoginManager

from app.models import db


def create_app():
    app = Flask(__name__)
    app.config.from_object('settings')

    register_database(app)
    register_blueprint(app)
    init_login(app)

    app.add_url_rule('/', endpoint='main')

    return app


def register_database(app):
    db.init_app(app)
    db.app = app


def register_blueprint(app):
    from app import auth, main
    app.register_blueprint(auth.bp)
    app.register_blueprint(main.bp)

    # comics blueprint
    from comics.views import feed, viewer
    app.register_blueprint(feed)
    app.register_blueprint(viewer)


# Initialize flask-login
def init_login(app):
    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    from app.models import User

    # Create user loader function
    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(user_id)
