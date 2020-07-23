from flask.json import JSONEncoder
from scraper.models import Comic

class ComicJSONEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Comic):
            return obj.as_dict()
        
        return super().default(obj)