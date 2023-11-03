import { BrowserRouter, } from "react-router-dom";
// import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarCanvas} from './components';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from  "./components/Contact";
import Stars from "./components/canvas/Stars";

const App =()=> {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <div className="relative z-0">
        <Contact/>
        <Stars/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
