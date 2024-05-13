import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Media from "./components/Media";
import Contact from "./components/Contact";
import Welcome from "./components/Welcome";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Welcome />} />
        </Routes>
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </>
  );
};

export default App;
