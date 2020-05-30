
import scrapy
# import os


# from urllib.parse import urlparse
from scrapy.exceptions import DropItem
from scrapy.pipelines.images import ImagesPipeline
from sqlalchemy.orm import sessionmaker

from webcomics.models import connect_db, create_table
from webcomics.models import Comic


class ComicDatabasePipeline:

    def __init__(self, session_factory):
        self.Session = session_factory
    
    @classmethod
    def from_crawler(cls, crawler):

        engine = connect_db(crawler.settings.get('CONNECTION_DB_URI'))
        create_table(engine)
        session = sessionmaker(bind=engine)

        return cls(session_factory=session)
    
    def process_item(self, item, spider):
        ''' save every comic item into the database 
        '''

        session = self.Session()

        new_comic = Comic()

        new_comic.name = item['name']
        new_comic.title = item['title']
        new_comic.url = item['comic_url']
        new_comic.image_url = item['image_url']

        try:
            new_comic.description = item['description']
            new_comic.filename = item['filename']
        except KeyError:
            pass

        comic = session.query(Comic).filter_by(image_url=new_comic.image_url).first()

        # TODO: add foreign key to Source table
        
        if comic is not None:
            # comic already exists in database, ignore item
            raise DropItem(f'Comic {comic} already exists!')

        try:
            session.add(new_comic)
            session.commit()
        except:
            session.rollback()
            raise DropItem(f'Cannot add changes to Database...')
        finally:
            session.close()
        
        return item


class ImagePipeline(ImagesPipeline):

    # def file_path(self, request, response=None, info=None):
    #     print(info)
    #     return os.path.basename(urlparse(request.url).path)
    
    def get_media_requests(self, item, info):
        for image_url in item['image_url']:
            yield scrapy.Request(image_url)

    def item_completed(self, results, item, info):
        # print(item['name'], 'downloaded: ', results)

        item['filename'] = results[0][1]['path']
        item['image_url'] = results[0][1]['url']


        return item


# TODO: image post processing pipeline

'''
class ImageDownloadPipeline:
    image_folder = 'images'

    def open_spider(self, spider):
        # make folder if it doesnt exist
        self.check_and_make(self.image_folder)
    
    def check_and_make(self, directory):
        if not os.path.isdir(directory):
            os.makedirs(directory)

    def process_item(self, item, spider):
        comic_name = item.get('name')
        if comic_name:
            comic_folder = os.path.join(self.image_folder, comic_name)
        else:
            raise DropItem('Invalid comic, no name found!')

        self.check_and_make(comic_folder)

        item['filename'] = os.path.join(comic_folder, item['title'])
        # save file
        return item
        '''

