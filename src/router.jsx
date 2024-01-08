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
  {
    path: "/em_que_cremos",
    element: <MissaoEProposito />,
  },
  {
    path: "/historia_da_igreja",
    element: <MissaoEProposito />,
  },
  {
    path: "/contato",
    element: <MissaoEProposito />,
  },
  {
    path: "/localizacao",
    element: <MissaoEProposito />,
  },
]);

const Routers = () => {
  return <RouterProvider router={routerPublic} />;
}

export default Routers;
