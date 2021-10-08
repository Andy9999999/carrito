import React, { useState, useEffect } from "react";
import "./Header1.sass";
import 'bootstrap/dist/css/bootstrap.css';

export default function Header() {

  return (
    <div>
      <header  className="Header">
        <div container>
          <div row>
            <div col-6>
              <img src="/images/logo.png" alt="logo" className="logo"  />
            </div>
            <div col-6>
              <div className="container-fluid">
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
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
