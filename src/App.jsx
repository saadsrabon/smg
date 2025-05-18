import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

// etc...

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-[72px]">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* Add more routes here */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
