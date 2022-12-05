import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Catalogpage from './Pages/Catalogpage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/catalog' element={<Catalogpage/>} />
        
      </Routes>
    </div>
  );
}

export default App;
