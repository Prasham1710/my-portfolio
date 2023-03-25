
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Achivements from "./components/Achivements";
import Work from './components/Work'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Achivements/>
      <Contact/>
        
     
    </div>
  );
}

export default App;
