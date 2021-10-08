import logo from './logo.svg';
import './App.css';
import Header from  './components/header/Header1.js';
import Productos from  './components/productos/Productos.js';
import React, { useState } from "react";

function App() {
  const products = [
    {id:1,name:'Cama', precio:100.00, categoria:'proteina',ruta:'/images/cama.jpg',cantidad:0},
    {id:2,name:'Sala', precio:100.00, categoria:'proteina',ruta:'/images/sala3.jpg',cantidad:0},
    {id:3,name:'Sala', precio:100.00, categoria:'proteina',ruta:'/images/sala.jpg',cantidad:0},
    {id:4,name:'bcaas', precio:200.00, categoria:'BCAAS',ruta:'/images/mesa.jpg',cantidad:0},
    {id:5,name:'bcaas', precio:200.00, categoria:'BCAAS',ruta:'/images/car2.jpg',cantidad:0},
    {id:6,name:'bcaas', precio:200.00, categoria:'BCAAS',ruta:'/images/litera.jpeg',cantidad:0},
    {id:7,name:'whey Standar', precio:100.00, categoria:'proteina',ruta:'/images/mesa2.jpg',cantidad:0},
    {id:8,name:'whey Standar', precio:100.00, categoria:'proteina',ruta:'/images/sala2.jpg',cantidad:0},
    {id:9,name:'whey Standar', precio:100.00, categoria:'proteina',ruta:'/images/sillon2.jpg',cantidad:0},
  ];


  const [data,setData]=useState(products)
  const [show,setShow]=useState(false)
  const [filterP,setFilter]=useState(data)

  return (
    <div className="App">
      <Header show={show} setShow={setShow} filterP={filterP} setFilter={setFilter} data={data}/>
      <Productos show={show} setShow={setShow} filterP={filterP} setFilter={setFilter} products={products}/>
    </div>
  );
}

export default App;
