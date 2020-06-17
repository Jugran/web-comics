#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys

from app import create_app

app = create_app()


if len(sys.argv) > 1:
    ip = sys.argv[1]
    app.run(host=ip)
else:
    app.run()

