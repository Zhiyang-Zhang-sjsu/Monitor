from db import db

class BindServer(db.Model):
    __tablename__ = 'server_monitored'

    id = db.Column(db.Integer)
    register_date = db.Column(db.Date, nullable=False)
    register_time = db.Column(db.Time, nullable=False)
    first_name = db.Column(db.String(30), primary_key=True)
    last_name = db.Column(db.String(20), primary_key=True)
    email = db.Column(db.String(60), nullable=False)
    phone = db.Column(db.String(11), nullable=False)
    address = db.Column(db.String(100))
    city = db.Column(db.String(80))
    state = db.Column(db.String(30))
    zip_code = db.Column(db.String(20))
    host = db.Column(db.String(100), primary_key=True)
    host_user = db.Column(db.String(20), primary_key=True)
    description = db.Column(db.String(300))

    def __init__(self, register_datetime,\
            first_name, last_name, email,\
            phone, address, city, state, zip_code,\
            host, host_user, description):

        date = register_datetime.split(' ')[0].split('/')
        time = register_datetime.split(' ')[1].split(':')
        self.register_date = str(date[2]) + str(date[0]).zfill(2) + str(date[1]).zfill(2)
        self.register_time = str(time[0]).zfill(2) + str(time[1]).zfill(2) + str(time[2]).zfill(2)
        self.first_name = first_name 
        self.last_name = last_name 
        self.email = email 
        self.phone = phone 
        self.address = address 
        self.city = city 
        self.state = state
        self.zip_code = zip_code 
        self.host = host 
        self.host_user = host_user 
        self.description = description 

    def json(self):
        return {
            'first_name' : self.first_name,
            'last_name' : self.last_name,
            'email' : self.email,
            'phone' : self.phone,
            'address' : self.address, 
            'city' : self.city,
            'state' : self.state,
            'zip_code' : self.zip_code, 
            'host' : self.host, 
            'host_user' : self.host_user, 
            'description' : self.description 
        }

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_host(cls, first_name, last_name, host, host_user):
        return cls.query.filter_by(first_name=first_name, last_name=last_name, host=host, host_user=host_user).first()

