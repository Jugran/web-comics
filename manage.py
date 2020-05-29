#!/usr/bin/env python
# coding: utf-8

from flask_script import Manager

from app import create_app
from app.models import db


app = create_app()
manager = Manager(app)


@manager.command
def create_db():
    """Create database for """
    db.create_all()


if __name__ == '__main__':
    manager.run()
