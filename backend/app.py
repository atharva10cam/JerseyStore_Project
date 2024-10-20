from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# Connect to MongoDB (Atlas or Local)
client = MongoClient('mongodb://localhost:27017/')  # Local MongoDB, change this to your Atlas connection URI if using Atlas
db = client['jersey_store']  # Database name

jerseys_collection = db['jerseys']
cart_collection = db['cart']
orders_collection = db['orders']

# Sample data insertion (if needed, otherwise insert through the API)
if jerseys_collection.count_documents({}) == 0:
    jerseys_data = [
        {"id": "barcelona-home", "name": "Barcelona Home Kit", "price": "₹990", "image": "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/9a477f39-480c-41e8-9937-0e9e20312167/FCB+M+NK+DF+JSY+SS+STAD+HM.png"},
        {"id": "liverpool-home", "name": "Liverpool Home Kit", "price": "₹985", "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35d0a3e6-c33c-46d2-9b60-a6418f50fd4c/liverpool-fc-2024-25-match-home-dri-fit-adv-football-authentic-shirt-0Xqfz6.png"},
        {"id": "argentina-home", "name": "Argentina Home Kit", "price": "₹980", "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/05596cc5f7724da8946f5362652319d0_9366/Argentina_24_Home_Jersey_White_IP8409_21_model.jpg"}
    ]
    jerseys_collection.insert_many(jerseys_data)

# API to get all jerseys
@app.route('/api/jerseys', methods=['GET'])
def get_jerseys():
    jerseys = list(jerseys_collection.find({}, {'_id': 0}))  # Exclude MongoDB's _id field
    return jsonify(jerseys)

# API to get jersey by ID
@app.route('/api/jersey/<string:jersey_id>', methods=['GET'])
def get_jersey_by_id(jersey_id):
    jersey = jerseys_collection.find_one({"id": jersey_id}, {'_id': 0})
    if jersey:
        return jsonify(jersey)
    else:
        return jsonify({"error": "Jersey not found"}), 404

# API to add items to the cart
@app.route('/api/cart', methods=['POST'])
def add_to_cart():
    jersey = request.json
    cart_collection.insert_one(jersey)
    return jsonify({"message": "Added to cart"}), 201

# API to get cart details
@app.route('/api/cart', methods=['GET'])
def get_cart():
    cart_items = list(cart_collection.find({}, {'_id': 0}))
    return jsonify(cart_items)

# API to update cart quantity
@app.route('/api/cart/<string:jersey_id>', methods=['PUT'])
def update_cart(jersey_id):
    quantity = request.json.get('quantity', 1)
    cart_collection.update_one({"id": jersey_id}, {"$set": {"quantity": quantity}})
    return jsonify({"message": "Cart updated"})

# API to handle checkout
@app.route('/api/checkout', methods=['POST'])
def checkout():
    checkout_data = request.json
    orders_collection.insert_one(checkout_data)  # Store the order in the database
    cart_collection.delete_many({})  # Clear the cart after checkout
    return jsonify({"message": "Checkout successful"}), 200

if __name__ == '__main__':
    app.run(debug=True)
