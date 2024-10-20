from flask import Blueprint, request, jsonify
from models import db, Order

orders_bp = Blueprint('orders', __name__)

@orders_bp.route('/orders', methods=['POST'])
def create_order():
    data = request.json
    name = data.get('name')
    address = data.get('address')
    payment_method = data.get('paymentMethod')

    new_order = Order(name=name, address=address, payment_method=payment_method)
    db.session.add(new_order)
    db.session.commit()

    return jsonify(new_order.to_dict()), 201

@orders_bp.route('/orders/<int:order_id>', methods=['GET'])
def get_order(order_id):
    order = Order.query.get(order_id)
    if order:
        return jsonify(order.to_dict()), 200
    return jsonify({'error': 'Order not found'}), 404
