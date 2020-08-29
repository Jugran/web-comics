
import scrapy
import re

from scrapy.spiders import XMLFeedSpider
from scrapy.utils.log import configure_logging, logging

from scraper.items import Comic


class RssSpider(XMLFeedSpider):
    name = 'rss'
    itertag = 'item'

    # configure_logging(install_root_handler=False)
    logging.basicConfig(
        filename='log.txt',
        format='%(levelname)s: %(message)s',
        level=logging.INFO
    )

    def start_requests(self):
        urls = ['https://xkcd.com/rss.xml', 'http://www.berkeleymews.com/feed/', 'http://jamesofnotrades.com/feed',
                'http://loadingartist.com/feed/']

        for url in urls:
            yield scrapy.Request(url=url)

    def parse_node(self, response, node):
        # self.logger.info('Hi, this is a <%s> node!: %s', self.itertag, ''.join(node.getall()))
        comic = Comic()

        comic['name'] = response.xpath('channel/title/text()').get()
        comic['title'] = node.xpath('title/text()').get()
        comic['comic_url'] = node.xpath('link/text()').get()

        paths = ['description//img/@src', '//img/@src']

        for path in paths:
            img_url = node.xpath(path).get()

            if img_url:
                comic['description'] = node.xpath(
                    path.replace('@src', '@title')).get()
                break
        else:
            # encoding issue, re-parse text
            description = node.xpath('description/text()').get()
            description = scrapy.Selector(text=description)

            img_url = description.xpath('//img/@src').get()
            comic['description'] = description.xpath('//img/@title').get()

        # TODO: check for broken links
        if not isinstance(img_url, str):
            self.logger.warning(f"{comic['name']} : img url not found! ")
            return None
        else:
            img_url = re.sub(r'-\d\d\dx\d\d\d', '', img_url)

        comic['image_url'] = img_url
        # comic['image_url'] = [img_url]
        return comic
