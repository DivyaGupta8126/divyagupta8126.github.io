import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {
  const [mode,setMode]=useState("light");

  const toggle=()=>{
    if(mode==='light')
    {
      setMode("dark");
      document.body.style.background="black";
      document.body.style.color="white";
    }
    else
    {
      setMode("light");
      document.body.style.background="white";
      document.body.style.color="black";
    }
  }

  return (
    <>
   <Home mode={mode} toggle={toggle}/>
   <About mode={mode}/>
   <Project mode={mode}/>
   <Contact mode={mode}/>
   <Footer/>
   
   </>
  );
}

export default App;
