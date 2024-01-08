import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import MissaoEProposito from "./src/missao-e-proposito";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={MissaoEProposito} path="/missao-e-proposito" />
    </BrowserRouter>
  );
};

export default Routes;
