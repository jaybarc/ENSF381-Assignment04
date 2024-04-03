import React, { useState } from 'react';

/*
function SignupForm() {
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSignup = (e) => {

        e.preventDefault();

        // Check if any field is empty
        if (!username || !password || !confirmPassword || !email) {
            setError('All fields are required!');
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        // Place successful signup logic here:

        // Reseting error and form fields after a successful signup
        setError('User signed up successfully!');
        setUser('');
        setPassword('');
        setConfirmPassword('');
        setEmail('');

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

export default SignupForm;*/


function SignupForm() {
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        // Check if any field is empty
        if (!username || !password || !confirmPassword || !email) {
            setError('All fields are required!');
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        try {
            // Make a POST request to the Flask backend
            const response = await fetch('/signup', {
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
                setError('Failed to sign up user');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            setError('Failed to sign up user');
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
