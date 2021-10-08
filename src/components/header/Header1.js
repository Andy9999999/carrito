import React, { useState } from "react";
import "./Header1.sass";
import 'bootstrap/dist/css/bootstrap.css';

export default function Header({show,setShow,filterP,setFilter,data}) {


const handleSearch = (event) => {
  setShow(true)
  let value = event.target.value.toLowerCase();
  if(value==="")
    setShow(false)
  else
  {
    let result = [];
    
    result = data.filter((prod) => {
      return prod.name.toLowerCase().search(value) !== -1;
    });
    
    setFilter(result);
  }
    
}

  return (
    <div>
      <header  className="Header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src="/images/logo2.png" alt="logo" className="logo"  />
            </div>
            <div className="col-6">
              <div className="container-fluid">
                <form className="d-flex">
                  <input className="form-control me-2" type="text" onChange={(event) =>handleSearch(event)}  placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>

    </div>
  );
}
