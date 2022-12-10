import React from "react";
import Img from "./Img";
import "../Rest.css";


const Rest = () => {
  return (
    <div className="Restaurantes">
      <body>
        <a href="./"> <Img imagen="logo1.jpg"/></a>
      </body>
      <div className="wrapper">
        <h2>Directorio restaurante</h2>
        <ul id="rest">
          <li>
            <figure>
              <Img imagen="res1.jpg" alt="restaurante 1" />
              <figcaption>
                <div class="restau" id="container"></div>
                <hr />
                <p>
                  La Constansa <hr />
                  Direccion: 'Cr 34 # 28 - 25'<p>Telefono: '3011234567''</p>
                </p>
                <div id="cont"></div>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <Img imagen="res2.jpg" alt="Restaurante 2" />
              <figcaption>
                <div id="container1"></div>
                <hr />
                <p>
                  La Constansa <hr />
                  Direccion: 'Cr 45 # 39 - 25''<p>Telefono: '3031234567' </p>
                </p>
                <div id="cont1"></div>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <Img imagen="res3.jpg" alt="Restaurante 2" />
              <figcaption>
                <div id="container2"></div>
                <hr />
                <p>
                  La Constansa <hr />
                  Direccion: 'Cr 54 # 93 - 52'<p>Telefono: '3041234567</p>
                </p>
                <div id="cont2"></div>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <Img imagen="res4.jpg" alt="Restaurante 2" />
              <figcaption>
                <div id="container3">
                  <hr />
                  <p>
                    La Constansa <hr />
                    Direccion: 'Cr 54 # 93 - 52'<p>Telefono: '3041234567</p>
                  </p>
                </div>
                <div id="cont3"></div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rest;
