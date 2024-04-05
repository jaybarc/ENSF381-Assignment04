
import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

function LoginPage() {
    const [login, setLogin] = useState(true);
    
    const changeForm = () => {
        setLogin(!login);
    };

    return (
      <div>
        <Header />

        {login ? <LoginForm /> : <SignupForm />}
        <button onClick={changeForm}>
            {login ? 'Switch to Signup' : 'Switch to Login'}
        </button>

        <Footer />

      </div>
      
    );
};

export default LoginPage;