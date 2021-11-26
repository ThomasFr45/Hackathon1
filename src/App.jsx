import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Lyrics from "./components/Lyrics";
import About from "./components/About";
import "./App.css";
import Teachers from "./components/Teachers";
import Inscription from './components/Inscription';
import "./components/Search.css";
import "./components/lyrics.css";
import { ProfilForm } from "./components/ProfilForm";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Routes>
            <Route path="/" element={<Home radio={false}/>} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/listening" element={<Home radio={true}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/inscription" element={<Inscription />} />
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
