import React, { useState, useEffect } from "react";
import "./Productos.sass";
import pro1 from "../../images/assets/pro1.png";

export default function Header() {

  return (
    <div>
      <div container>
        <div className="ren">
          <div className="col">
            <img src={pro1} alt="pro1" className="pro"/>
          </div>
        </div>
      </div>
    </div>
  );
}
