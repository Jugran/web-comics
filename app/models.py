
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin


db = SQLAlchemy()


class User(UserMixin, db.Model):
    # __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(50))

    def __repr__(self):
        return f'<User {self.username}>'