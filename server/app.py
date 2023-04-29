from flask import Flask
from flask_restful import Api
from routes.routes import semantic_search_routes
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

api = Api(app)
semantic_search_routes(api)

if __name__=="__main__":
    app.run(debug=True)