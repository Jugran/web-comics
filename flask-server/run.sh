#!/bin/bash

export FLASK_APP=app
export FLASK_ENV=development
export FLASK_DEBUG=1

if [[ ! -z $1 ]]
then 
    python run.py '0.0.0.0'
else
    python run.py
fi
# flask run
