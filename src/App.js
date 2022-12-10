import React from "react";

import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import AgregarRest from "./componentes/AgregarRest";

import Home from "./componentes/Home";
import Rest from "./componentes/Rest";

import Busqueda from "./componentes/Busqueda";

function App() {
  return (
    <Router>
      <div className="container ">
        <hr />
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/Restaurantes">
            <Rest /> 
          </Route>
          <Route path="/Agregarrest">
            <AgregarRest />
          </Route>
          <Route path="/busqueda">
            <Busqueda/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
