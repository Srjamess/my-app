import "../App.css"
import React from "react";
import Img from "./Img";

const AgregarRest = () => {
  return (
    <div className="AgregarRest">
      <body>
      <a href="./"> <Img imagen="logo1.jpg"/></a>
      </body>
      <h1>Nuevo Restaurante</h1>
      <form method="post" action="#">
        <label>Id Restaurante</label>
        <br />
        <input type="number" />
        <br />
        <label>Nombre</label>
        <br />
        <input type="text" />
        <br />
        <label>Dirreccion</label>
        <br />
        <input type="text" />
        <br />
        <select name="country">
          <option value="Medellin">Medellin</option>
          <option value="Bello">Bello</option>
          <option value="Envigado">Envigado</option>
          <option value="Caldas">Caldas</option>
          <option value="San Antonio de Prado">San Antonio de Prado</option>
          <option value="Itagui">Itagui</option>
          <option value="Caldas">Caldas</option>
          <option value="Sabaneta">Sabaneta</option>
          <option value="Copacabana">Copacabana</option>
          <option value="Barbosa">Barbosa</option>
          <option value="La Estrella">La Estrella</option>
          <option value="Santa Elena">Santa Elena</option>
        </select>
        <br />
        <br />
        <label>Telefono</label>
        <br />
        <input type="number" />
        <br />
        <br />
        <button type="submit">Enviar</button>
        <button type="reset">Borrar</button>
        <br />
      </form>
    </div>
  );
};

export default AgregarRest;
