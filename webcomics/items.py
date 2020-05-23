
import scrapy


class Comic(scrapy.Item):
    name = scrapy.Field()
    title = scrapy.Field()
    comic_url = scrapy.Field()
    image_url = scrapy.Field()
    description = scrapy.Field()
    filename = scrapy.Field()

class Source(scrapy.Item):
    name = scrapy.Field()
    url = scrapy.Field()
    feed_url = scrapy.Field()
    iter_tag = scrapy.Field()