import React, { useState } from 'react';
import { isAuthenticated, login } from './auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            if (response.ok) {
                console.log('DEBUGGING b4 isauth var =', isAuthenticated());
                login();
                console.log('Debugging:aft isauth var =', isAuthenticated());
                // Redirect to products page after successful login
                navigate('/products');
                           
            } else {
                const data = await response.json();
                setError(data.error || 'Failed to login');
                
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Failed to login');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input 
                        type="text"
                        id="username"
                        placeholder='Enter your username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                </div>
                    
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </div>
                    
                <button type="submit">Login</button>

            </form>
        </div>

    );
}

export default LoginForm;

/*import React, { useState } from 'react';
import { isAuthenticated, login } from './auth';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            if (response.ok) {
                console.log('DEBUGGING b4 isauth var =', isAuthenticated());
                login();
                console.log('Debugging:aft isauth var =', isAuthenticated());

                           
            } else {
                const data = await response.json();
                setError(data.error || 'Failed to login');
                
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Failed to login');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input 
                        type="text"
                        id="username"
                        placeholder='Enter your username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                </div>
                    
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </div>
                    
                <button type="submit">Login</button>

            </form>
        </div>

    );
}

export default LoginForm;

*/