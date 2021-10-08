import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Modal, Button} from "react-bootstrap";
import { fab } from '@fortawesome/free-brands-svg-icons';
import "./Productos.sass";
import NumberFormat from 'react-number-format';

export default function Productos({show,setShow,filterP,products,setProducts}) {

  const handleClose = () => setShowM(false)
  const handleShowM = () => setShowM(true)
  const [count,setCount]=useState(null)
  const [cant,setCant]=useState([])
  const [showM, setShowM] = useState(false)
  const [total,setTotal]=useState(0)
  const [subtotal,setSubTotal]=useState(0)
  const IVA =1.16
  const [data,setData]=useState(products)
  const [carrito,setCarrito]=useState([])

  const addShop= (e)=>{
    setCount(count+1)
    setSubTotal(subtotal+e.precio)
    setTotal(total+e.precio*IVA)
    e.cantidad+=1

    var car=[...carrito]
       if(car.length!==0)
       {
         const cn=car.filter((c)=>c.id===e.id )
         console.log("filter",cn)
         if(cn.length===0){
           setCarrito([...carrito,e])
         }
      }
       else {
          setCarrito([e])
       }
      console.log("cantidad++",e.cantidad)
  }
  const delete1=(c)=>{
    console.log("CCC",c)

      console.log("CAR",carrito)
    const pro=carrito.filter((p)=>p.id!==c.id )
    console.log("PRO",pro)
    setCarrito(pro)
    setCount(count-1)
  }

  return (
      <div id="principal">
          <div className="container" >
            <button className="btnIcon" type="text" onClick={handleShowM}><img src="/images/shop.png" className="icon"/> {count} </button>

            {show ?(
                <div className="row">
              {filterP.map(pro => (
                <div className="col-12 col-md-4 col-sm-12 elem">
                  <img src={pro.ruta} alt="name" className="images"/>
                  <hr/>
                  <p>{pro.name}</p>
                  <p>${pro.precio}</p>
                 <button className="btn btnAdd" onClick={()=>{addShop(pro)}}>ADD TO CART</button>
                </div>
            ))}
          </div>
        ):
        (
            <div className="row">
              {products.map(pro => (
                  <div className="col-12 col-md-4 col-sm-12 elem">
                    <img src={pro.ruta} alt="name" className="images"/>
                    <hr/>
                    <p>{pro.name}</p>
                    <p>${pro.precio}</p>
                   <button className="btn btnAdd" onClick={()=>{addShop(pro)}}>ADD TO CART</button>
                  </div>
              ))}
            </div>
        )
      }
    </div>
        <Modal size="md" scrollable="true" show={showM} onHide={handleClose}  keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {carrito.length!==0 ?(<div>
            <p>subtotal:{subtotal}</p>
          <p>IVA: 16%</p>
          <p>Total:<NumberFormat value={total} displayType={'text'} thousandSeparator={true} decimalScale={2} prefix={'$'} /></p>
          <table>
            <thead>
              <tr>
                <th>Articulo    </th>
                <th>Nombre    </th>
                <th>Precio</th>
                <th>Cantidad</th>
              </tr>
          </thead>
          <tbody>
            {carrito.map(c => (
                  <tr>
                    <td><img src={c.ruta} alt="name" className="img-fluid imagesM"/></td>
                    <td> {c.name}</td>
                    <td> ${c.precio} </td>
                    <td> {c.cantidad}</td>
                    <td><button className="btn btnAdd" onClick={()=>{delete1(c)}}>ELIMINAR</button></td>
                </tr>
            ))}
          </tbody>
          </table>
        </div>
        ):
        (
          <div>No hay productos en el carrito</div>
        )}
        </Modal.Body>
      <Modal.Footer>
        <Button className="btn btnAdd"  onClick={handleClose}>Seguir comprando</Button>
        <Button variant="success">Comprar</Button>
      </Modal.Footer>
  </Modal>
</div>
  );
}
