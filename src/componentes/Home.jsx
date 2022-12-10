import "../App.css";
import React from "react";
import Img from "./Img";

const Home = () => {
  return (
    <div className="App">
      <body>
        <header>
          <Img imagen="logo1.jpg" />
          <nav>
            <ul>
              <li>
                <a href="./Restaurantes">Restaurantes</a>
              </li>
              <li>
                <a href="./AgregarRest">Agregar restaurante</a>
              </li>
              <li>
                <a href="./Busqueda">Busqueda</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="banner_image">
          <Img imagen="image.jpg" />
          <div className="banner_description">Cual sera tu orden?</div>
        </div>
      </body>
    </div>
  );
};

export default Home;
