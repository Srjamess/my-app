import React from "react";
import Img from "./Img";

const Busqueda = () => {
  return (
    <div className="Busqueda">
      <body>
        <header>
        <a href="./"> <Img imagen="logo1.jpg"/></a>
        </header>
        <br />
        <h1>¿Qué restaurante quieres buscar?</h1>
        <input id="busqueda" class="busqueda" placeholder="Buscar..." />
        <button id="btn" class="btn">
          Buscar
        </button>
        <h3 id="panel_4" class="panel_4"></h3>
        <h3 id="panel_1" class="panel_1"></h3>
        <p id="panel_2" class="panel_2"></p>
        <p id="panel_3" class="panel_3"></p>

        
      </body>
    </div>
  );
};

export default Busqueda;
