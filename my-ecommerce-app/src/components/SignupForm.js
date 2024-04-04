import React, { useState } from 'react';

function SignupForm() {
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!username || !password || !confirmPassword || !email) {
            setError('All fields are required!');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email
                })
            });

            if (response.ok) {
                setError('User signed up successfully!');
                setUser('');
                setPassword('');
                setConfirmPassword('');
                setEmail('');
            } else {
                setError('Username exists already.');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            setError('Failed to sign up user, server issue');
        }
    };

    return (
        <div>
            <h2>Signup</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input 
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor='password'>Password:</label>
                    <input 
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor='confirmPassword'>Confirm Password:</label>
                    <input 
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input 
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default SignupForm;

