import React from 'react';
import "./App.css";
import Home from './components/Home';
import About from './components/about';
import Qualities from "./components/qualities";
import Skills from './components/skills';
import Contact from './components/contact';
import StayTuned from './components/staytuned';


function App(){
  return(
    <main className="App">
      <React.Fragment>
      <Home/>
      <About/>
      <Qualities/>
      <Skills/>
      <Contact/>
      <StayTuned/>
      </React.Fragment>
    </main>
  );
}

export default App;