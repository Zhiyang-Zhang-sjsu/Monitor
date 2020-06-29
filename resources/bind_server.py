from flask_restful import Resource, reqparse
from models.bind_server import BindServer

class BindServerInfo(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('first_name',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )

    parser.add_argument('last_name',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )

    parser.add_argument('email',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )

    parser.add_argument('phone',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )

    parser.add_argument('address',
                        type=str,
                        required=False
                        )

    parser.add_argument('city',
                        type=str,
                        required=False
                        )

    parser.add_argument('state',
                        type=str,
                        required=False
                        )

    parser.add_argument('zip_code',
                        type=str,
                        required=False
                        )

    parser.add_argument('host',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )

    parser.add_argument('host_user',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )

    parser.add_argument('description',
                        type=str,
                        required=False
                        )

    def post(self):
        data = BindServerInfo.parser.parse_args()

        if BindServer.find_by_host(data['first_name'], data['last_name'], data['host'], data['host_user']):
            return {"message": "The host with that user already exists"}, 400
        
        bind_host_user = BindServer(**data)

        try:
            bind_host_user.save_to_db()
        except:
            return {"message": "An error occurred inserting the item."}, 500

        return bind_host_user.json(), 201

