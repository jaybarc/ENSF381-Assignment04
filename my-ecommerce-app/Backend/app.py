from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = [
    {"ID": 1, "username": "admin", "password": "test1", "email": "admin@me.com"}
]

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json 
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    for user in users:
        if user['username'] == username:
            print("username check failed exists.")
            return jsonify({'error': 'Username already exists, please use a different name.'}), 409
        
    print("pass user check")
    new_user = {
        "ID": len(users) + 1,
        "username": username,
        "password": password,
        "email": email
    }
    print("User not saved yet")
    users.append(new_user)
    print("user now saved")

    for i in users:
        print(f"checking username: |{i['username']}| exists.")

        
    return jsonify({'message': 'User signed up successfully'})

if __name__ == '__main__':
    app.run(debug=True)
