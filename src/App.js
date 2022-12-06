import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Catalogpage from './Pages/Catalogpage';
import About from './Pages/About';
import Product from './Pages/Product';



function App() {
  let links = [

    {
      title: 'Главная',
      link: '/',
    },
    {
      title: 'Каталог',
      link: '/catalog',
    },
    {
      title: 'О нас',
      link: '/about',
    },
  ];
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home links={links}/>}/>
        <Route path='/catalog' element={<Catalogpage links={links}/>} />
        <Route path='/about' element={<About links={links}/>} />
        <Route path='/product/:id' element={<Product links={links}/>} />

        
      </Routes>
    </div>
  );
}

export default App;
