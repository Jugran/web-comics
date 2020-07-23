
from sqlalchemy.orm import sessionmaker

from scraper.models import connect_db, Comic
from scraper.settings import CONNECTION_DB_URI

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

        # new_items = self.as_dict(new_items)

        self.count += len(new_items)

        if isinstance(new_items, list):
            self.items += new_items

        session.close()
    
    def get_index(self, id):
        ''' returns index of comic with id
        '''
        for i, item in enumerate(self.items):
            if item.id == id:
                return i
        
        raise ValueError
    
    def get(self, n=10, start=None):
        ''' returns next n number of comic items
        '''
        if start is not None:
            self.index = start - 1

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
        
        # return self.as_dict(items)
        return items


        

        
    
