// App.js
/*
import React from 'react';
import Homepage from './components/Homepage'; 

function App() {
  return (
    <div>
      <Homepage />
    </div>
  );
}

export default App;*/

import React from 'react';
import Homepage from './components/Homepage'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/products" element={<Homepage/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
