import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cases from './pages/Cases';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cases.html" element={<Cases />} /> 
        {/* Redirect or map /cases.html since old nav might link there, or change it */}
        <Route path="/cases" element={<Cases />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
