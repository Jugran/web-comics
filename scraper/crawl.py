
from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings

def crawl():
    process = CrawlerProcess(get_project_settings())
    process.crawl('rss')
    process.start()

if __name__ == '__main__':
    crawl()