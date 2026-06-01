import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cases from './pages/Cases';
import CasePage from './pages/CasePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cases.html" element={<Cases />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/cases/:slug" element={<CasePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
