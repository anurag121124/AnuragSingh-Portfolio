import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Resume from "./components/Pages/Resume";
import Projects from "./components/Pages/Projects";
import EducationAndCertificate from "./components/Pages/EducationAndCertificate";
import Certificate from "./components/Certificate";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/portfolio" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route
            exact
            path="/EducationAndCertificate"
            element={<EducationAndCertificate />}
          />
          <Route exact path="/Certificate" element={<Certificate />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <GoToTop/>
      

    </>
  );
}

export default App;
