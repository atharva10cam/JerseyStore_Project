from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Jersey(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    image = db.Column(db.String(255), nullable=False)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    payment_method = db.Column(db.String(50), nullable=False)
    # Add additional fields for the order as needed

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'address': self.address,
            'payment_method': self.payment_method,
            # Include other fields as needed
        }
