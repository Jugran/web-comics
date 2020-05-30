
from sqlalchemy.orm import sessionmaker
from models import connect_db, Comic

from settings import CONNECTION_DB_URI

class Comics:
    ''' list of comic items 
    '''

    def __init__(self, DATABASE_URI=CONNECTION_DB_URI):
        engine = connect_db(DATABASE_URI)
        
        self.session = sessionmaker(bind=engine)
        self.items = []
        self.index = -1
        self.count = -1 

        self.load()
    
    def __iter__(self):
        return self

    def __next__(self):
        self.index += 1
        
        if self.index <= self.count:
            return self.items[self.index]
        else:
            # load more comics from db
            self.load()
            if self.index < self.count:
                return next(self)
        
        raise StopIteration

    def __len__(self):
        return self.count + 1

    def load(self, n=50):
        ''' loads n (default 50) number of comics from database
        '''
        session = self.session()

        query = session.query(Comic).order_by(Comic.id.desc())
        new_items = query.offset(self.count + 1).limit(n).all()

        self.count += len(new_items)

        if isinstance(new_items, list):
            self.items += new_items

        session.close()

    
    def get(self, n=10):
        ''' returns next n number of comic items
        '''
        end = self.index + n + 1

        if self.index == self.count:
            # get more items from db
            self.load()

        try:
            items = self.items[self.index + 1 : end]
            self.index = end
        except IndexError:
            items = self.items[self.index + 1:]
            self.index = self.count
        
        return items


        

        
    
