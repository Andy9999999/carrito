import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Productos.sass";

export default function Header() {

  const [count,setCount]=useState(0);
  const products = [
    {id:1,name:'whey Standar', precio:100.00, categoria:'proteina',ruta:"/images/pro1.png"},
    {id:2,name:'whey Standar', precio:100.00, categoria:'proteina',ruta:"/images/pro2.jpg"},
    {id:3,name:'whey Standar', precio:100.00, categoria:'proteina',ruta:'/images/pro3.jpg'},
    {id:4,name:'bcaas', precio:200.00, categoria:'BCAAS',ruta:'/images/pro1.png'},
    {id:5,name:'bcaas', precio:200.00, categoria:'BCAAS',ruta:'/images/pro1.png'},
    {id:6,name:'bcaas', precio:200.00, categoria:'BCAAS',ruta:'/images/pro1.png'},
    {id:7,name:'whey Standar', precio:100.00, categoria:'proteina',ruta:'/images/pro1.png'},
    {id:8,name:'whey Standar', precio:100.00, categoria:'proteina',ruta:'/images/pro1.png'},
    {id:9,name:'whey Standar', precio:100.00, categoria:'proteina',ruta:'/images/pro1.png'},
];
  const addShop= (e)=>{
    console.log("addShop",e);
  }
  const [showM, setShowM] = useState(false);
  const handleClose = () => setShowM(false);
  const handleShow = () => setShowM(true);

  //  const list = products.map(({info, key}) => <li key={key}>{info}</li>)
 const AddCart =(e)=>{
 };
  return (
      <div id="principal" >
        <div className="container" >
          <div className="col-12 col-md-6 col-sm-12">
              <button className="btn btnShow" onClick={()=>setCount(count+1)}>Ver carrito: {count} productos</button>
          </div>
          <span>Su carrito: {count} productos</span>
          <div className="row">
            {products.map(pro => (
                <div className="col-6 col-md-4 col-sm-12 elem">
                  <img src={pro.ruta} alt="name" className="img images"/>
                  <p>{pro.name}</p>
                  <p>${pro.precio}</p>
                  <hr/>
                  <button className="btn btnAdd" onClick={()=>setCount(count+1)}>ADD TO CART</button>

                </div>
        ))
      }
    </div>
  </div>
      </div>
  );
}
