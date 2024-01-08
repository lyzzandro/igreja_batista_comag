import Main from "./pages/main";
import MissaoEProposito from "./pages/missao-e-proposito";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import React from "react";

const routerPublic = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/missao_e_proposito",
    element: <MissaoEProposito />,
  },
]);

const Routers = () => {
  return <RouterProvider router={routerPublic} />;
}

export default Routers;
