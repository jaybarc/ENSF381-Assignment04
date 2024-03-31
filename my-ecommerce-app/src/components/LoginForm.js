import React, { useState } from 'react';

function LoginForm() {
    const [username, changeUsername] = useState('');
    const [password, changePassword] = useState('');
    const [error, setError] = useState(false);

    const login = (e) => {
        e.preventDefault();

        if (username.trim() === '' || password.trim() === '') {
            setError(true);
        }
        else {

            // Place successful login logic here:

            // Resetting form fields if there is a successful submission
            setError(false);
            changeUsername('');
            changePassword(''); 
        }

    };

    return (
        <div>
            <h2>Login</h2>
            
            {error && <p style={{ color: 'red' }}>Please fill out both fields!</p>}

            <form onSubmit={login}>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input 
                        type="text"
                        id="username"
                        placeholder='Enter your username'
                        value={username}
                        onChange={(e) => changeUsername(e.target.value)}
                        
                    />

                </div>
                    
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => changePassword(e.target.value)}
                        
                    />

                </div>
                    
                <button type="submit">Login</button>

            </form>

        </div>

    );
};

export default LoginForm;