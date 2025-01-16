import './App.css';
import Navbar from './Components/Navbar';
import Home from './Home';
import Footer from './Components/Footer/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Profireca" element={<Home/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;