import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "./App.css";
import { ProfilForm } from './components/ProfilForm'

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profiles" element={<ProfilForm />} />
          </Routes>
        </Router>
      </div> 
      <Footer />
    </div>
  );
}

export default App;
