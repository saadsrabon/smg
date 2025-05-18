import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import { Children } from 'react';
import Education from './pages/Education';

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
    
       
          {/* Add more routes here */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
