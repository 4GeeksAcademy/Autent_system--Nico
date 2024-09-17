from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

db = SQLAlchemy()
bcrypt = Bcrypt()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    def __repr__(self):
        return f'<User {self.email}>'
    
    @staticmethod
    def create_user(email,password, is_active=True):
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = User(
            email = email,
            password = hashed_password,
            is_active = is_active
        )
        db.session.add(new_user)
        db.session.commit()
        return new_user
    
    def check_password(self, password):
        return bcrypt.check_password_hash(self.password, password)


    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }