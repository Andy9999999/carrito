import React, { useState, useEffect } from "react";
import "./Header1.sass";

import Logo from "../../images/assets/logo.png";

export default function Header() {

  return (
    <div>
      <header data-aos="fade-up" className="Header">
        <div container>
          <div row>
            <div col>
              <img src={Logo} alt="logo" className="logo"  />
            </div>
            <div col>
              
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
