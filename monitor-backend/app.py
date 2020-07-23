from flask import Flask, render_template, url_for, request
from flask_restful import Api
import pymysql
import json

from db import db
from resources.bind_server import BindServerInfo
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:Qgmmzn@123@localhost:3306/monitor'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True
api = Api(app)

@app.before_first_request
def create_tables():
    db.create_all()

'''
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/bind')
def bind():
    return render_template("bind.html")
'''

api.add_resource(BindServerInfo, '/bind_server', endpoint='bind_server')

if __name__ == '__main__':
    db.init_app(app)
    app.run(port=5000, debug=True)
