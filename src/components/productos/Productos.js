import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Modal, Button} from "react-bootstrap";
import { fab } from '@fortawesome/free-brands-svg-icons';
import "./Productos.sass";
import NumberFormat from 'react-number-format';

export default function Productos() {

  const [count,setCount]=useState(0);
    const [countP,setCountP]=useState([]);
  const [showM, setShowM] = useState(false);
  const handleClose = () => setShowM(false);
  const handleShowM = () => setShowM(true);
  const [total,setTotal]=useState(0);
  const [subtotal,setSubTotal]=useState(0);
  const IVA =1.16;
  const [carrito,setCarrito]=useState([]);

  const products = [
    {id:1,name:'Cama', precio:100.00, categoria:'proteina',ruta:"/images/cama.jpg"},
    {id:2,name:'Sala', precio:100.00, categoria:'proteina',ruta:"/images/sala3.jpg"},
    {id:3,name:'Sala', precio:100.00, categoria:'proteina',ruta:'/images/sala.jpg'},
    {id:4,name:'bcaas', precio:200.00, categoria:'BCAAS',ruta:'/images/pro1.png'},
    {id:5,name:'bcaas', precio:200.00, categoria:'BCAAS',ruta:'/images/pro1.png'},
    {id:6,name:'bcaas', precio:200.00, categoria:'BCAAS',ruta:'/images/pro1.png'},
    {id:7,name:'whey Standar', precio:100.00, categoria:'proteina',ruta:'/images/pro1.png'},
    {id:8,name:'whey Standar', precio:100.00, categoria:'proteina',ruta:'/images/pro1.png'},
    {id:9,name:'whey Standar', precio:100.00, categoria:'proteina',ruta:'/images/pro1.png'},
];
  const addShop= (e)=>{
    setCount(count+1);
    setSubTotal(subtotal+e.precio);
    setTotal(total+e.precio*IVA);

       setCarrito([...carrito,e])
    // }
    // let arr=[...carrito];


    // arr[]=[...carrito];
  }
  const addCountP=(cant)=>{
    setCountP({...countP,cant:cant})
  }
  //  const list = products.map(({info, key}) => <li key={key}>{info}</li>)  <button className="btn btnAdd" onClick={()=>{setCount(count+1);setTotal(pro.precio*IVA);setSubTotal(total+pro.precio)}}>ADD TO CART</button>-->

 const AddCart =(e)=>{
 };
  return (
      <div id="principal">
        <div className="container" >
          <div className="col-12 col-md-6 col-sm-12">
            <Button variant="primary" onClick={handleShowM}><i className="fas fa-shopping-cart"></i>: {count} productos</Button>
          </div>
          <span>Su carrito: {count} productos</span>
          <div className="row">
            {products.map(pro => (
                <div className="col-6 col-md-4 col-sm-12 elem">
                  <img src={pro.ruta} alt="name" className="img-fluid images"/>
                  <hr/>
                  <p>{pro.name}</p>
                  <p>${pro.precio}</p>
                 <button className="btn btnAdd" onClick={()=>{addShop(pro)}}>ADD TO CART</button>
                </div>
            ))}
          </div>
        </div>
        <Modal scrollable="true" show={showM} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Subtotal:{subtotal}</p>
        <p>IVA: 16%</p>
        <p>Total:<NumberFormat value={total} displayType={'text'} thousandSeparator={true} decimalScale={2} prefix={'$'} /></p>
        <div className="container">
          {carrito.map(car2 => (
            <div className="col-6 col-md-4 col-sm-12 elem">
              <img src={car2.ruta} alt="name" className="img-fluid images"/>
              <p>Producto: {car2.name}  Precio: ${car2.precio} </p>
              <input id="cant" type="number" name="inputcant" value={countP}
                onChange={e=>{setCountP(e.target.value)}}/>
              <hr/>
            </div>
          ))}
          </div>
          </Modal.Body>
        <Modal.Footer>
          <Button className="btn btnAdd"  onClick={handleClose}>Seguir comprando</Button>
          <Button variant="success">Comprar</Button>
        </Modal.Footer>
      </Modal>
</div>
  );
}
