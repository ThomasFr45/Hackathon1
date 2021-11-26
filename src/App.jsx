import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banniere from "./components/Banniere";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Lyrics from './components/Lyrics';
import About from './components/About';
import "./App.css";
import "./components/Search.css";
import './components/lyrics.css';
import { ProfilForm } from './components/ProfilForm';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Navbar />
          <Banniere title="Premier Hackathon avec la team plop !" />
          <Routes>
            <Route path="/" element={<Home radio={false}/>} />
            <Route path="/listening" element={<Home radio={true}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/profiles/:pseudo" element={<ProfilForm />} />
            <Route path="/:artist/:title" element={<Lyrics />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
