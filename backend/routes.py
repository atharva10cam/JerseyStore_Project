from flask import Blueprint, jsonify
from models import jerseys

jersey_routes = Blueprint('jerseys', __name__)

@jersey_routes.route('/api/jerseys', methods=['GET'])
def get_jerseys():
    return jsonify(jerseys)
