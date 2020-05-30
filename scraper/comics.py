
from sqlalchemy.orm import sessionmaker
from models import connect_db, Comic

from scraper.settings import CONNECTION_DB_URI

class Comics:
    ''' list of comic items 
    '''

    def __init__(self, DATABASE_URI=CONNECTION_DB_URI):
        engine = connect_db(DATABASE_URI)
        
        self.session = sessionmaker(bind=engine)
        self.items = []
        self.index = -1
        self.count = 0

        self.load()
    
    def __iter__(self):
        return self

    def __next__(self):
        self.index += 1
        
        if self.index < self.count:
            return self.items[self.index]
        
        raise StopIteration

    def load(self, num=50):
        ''' loads n (default 50) number of comics from database
        '''
        session = self.session()

        query = session.query(Comic).order_by(Comic.id.desc())
        new_items = query.offset(self.count).limit(num).all()

        self.count += len(new_items)

        self.items.append(new_items)

        if self.index == -1:
            self.index = 0

        session.close()

    
    def get(self, num=10):
        ''' returns next n number of comic items
        '''
        try:
            items = self.items[self.index + 1:num]
            self.index = num - 1
        except IndexError:
            items = self.items[self.index + 1:-1]
            self.index = self.count - 1
        
        return items


        

        
    
