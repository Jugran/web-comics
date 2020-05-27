
import scrapy
import os

from urllib.parse import urlparse
from scrapy.exceptions import DropItem
from scrapy.pipelines.images import ImagesPipeline


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

        # TODO: image post processing

        return item

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

