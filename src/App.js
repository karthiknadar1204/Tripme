import Navbar from "./components/Navbar";
import "./styles/Navbar.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Services from "./components/Services.jsx"
import "./styles/Home.css"
import Footer from "./components/Footer";

import Contact from "./components/contact.jsx"

function App() {
  return (
    <>
    <Router>
          
        <Navbar/>

        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>

      </Routes>

      <Footer/>

      

    </Router>

    
    
    </>

    
  );
}

export default App;
