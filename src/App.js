import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Catalogpage from './Pages/Catalogpage';
import About from './Pages/About';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/catalog' element={<Catalogpage/>} />
        <Route path='/about' element={<About/>} />
        
      </Routes>
    </div>
  );
}

export default App;
