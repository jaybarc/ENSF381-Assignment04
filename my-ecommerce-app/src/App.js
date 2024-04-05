import React from 'react';
import Homepage from './components/Homepage'; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Productpage from './components/Productpage';
import LoginPage from './components/LoginPage';
import { isAuthenticated } from './components/auth';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/products" element={isAuthenticated()? <Productpage /> : <Navigate to="/login" replace />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;



/*import React from 'react';
import Homepage from './components/Homepage'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Productpage from './components/Productpage';
import LoginPage from './components/LoginPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/products" element={<Productpage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;*/
