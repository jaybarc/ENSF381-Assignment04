import React from 'react';
import Homepage from './components/Homepage'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Productpage from './components/Productpage';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/products" element={<Productpage/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
