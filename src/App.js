import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';


function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;