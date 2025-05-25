import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import { Children } from 'react';
import Education from './pages/Education';
import Health from './pages/Health';

// etc...

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-[72px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/about/education" element={<Education />} />
          <Route path="/about/health" element={<Health/>} />
    
       
          {/* Add more routes here */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
