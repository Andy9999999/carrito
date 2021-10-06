import React, { useState, useEffect } from "react";
import "./Header1.sass";

export default function Header() {

  return (
    <div>
      <header  className="Header">
        <div container>
          <div row>
            <div col>
              <img src="/images/logo.png" alt="logo" className="logo"  />
            </div>
            <div col>

            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
