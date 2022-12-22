import { BrowserRouter, Routes,Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/about' element= {<About/>}/>
        <Route path='/skills' element= {<Skills/>}/>
        <Route path='/work' element={<Works/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes></BrowserRouter>
     
    </div>
  );
}

export default App;
