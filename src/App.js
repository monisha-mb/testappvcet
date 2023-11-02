import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Navigation from './Navagation/Navigation';
import Menubar from './Components/Menubar';
import Aboutus from './Components/Aboutus';
function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/menubar" element={<Menubar/>} />
          <Route path="/contacts" element={<Contact/>} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
