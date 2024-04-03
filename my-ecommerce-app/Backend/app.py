from flask import Flask, request, jsonify

app = Flask(__name__)

# Create an empty list to store user data
users = []

@app.route('/signup', methods=['POST'])
def signup():
    # Get data from the request
    data = request.get_json()

    # Extract username, password, and email from the data
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    # Create a dictionary to represent the user
    user = {
        'username': username,
        'password': password,
        'email': email
    }

    # Add the user to the list
    users.append(user)

    # Return a success message
    return jsonify({'message': 'User signed up successfully'})

@app.route('/users', methods=['GET'])
def get_users():
    # Return the list of users as JSON
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)
