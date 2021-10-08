import logo from './logo.svg';
import './App.css';
import Header from  './components/header/Header1.js';
import Productos from  './components/productos/Productos.js';
import React, { useState } from "react";

function App() {

  return (
    <div className="App">
      <Header/>
      <Productos />
    </div>
  );
}

export default App;
