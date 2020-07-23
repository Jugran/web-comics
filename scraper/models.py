
from sqlalchemy import create_engine, ForeignKey, Column
from sqlalchemy import Integer, String

from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


def connect_db(connection_string):
    # TODO: make compatible with settings.py

    return create_engine(connection_string)

def create_table(engine):
    Base.metadata.create_all(engine)

class Comic(Base):
    __tablename__ = 'comics'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    # source_id = Column(Integer, ForeignKey('sources.id'))
    title = Column(String)
    url = Column(String)
    image_url = Column(String, nullable=False, unique=True)
    description = Column(String)
    filename = Column(String)

    def as_dict(self):
        _dict = {
            'id' : self.id,
            'name' : self.name,
            'title' : self.title,
            'url' : self.url,
            'image_url' : self.image_url,
            'description' : self.description,
        }

        return _dict

    def __repr__(self):
        return f'<Name: {self.name}, Title: {self.title}, Image URL: {self.image_url}>'

    
class Source(Base):
    __tablename__ = 'sources'

    id = Column(Integer, primary_key=True)
    name = Column(String, unique=True)
    url = Column(String, nullable=False)
    feed_url = Column(String)
    iter_tag = Column(String)

    def __repr__(self):
        return f'<Name: {self.name}, URL: {self.url}, Feed URL: {self.feed_url}>'

 
 