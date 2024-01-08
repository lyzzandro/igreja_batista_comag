import Main from "./pages/main";
import EmQueCremos from "./pages/em-que-cremos";
import MissaoEProposito from "./pages/missao-e-proposito";
import HistoriaDaIgreja from "./pages/historia-da-igreja";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
    element: <EmQueCremos />,
  },
  {
    path: "/historia_da_igreja",
    element: <HistoriaDaIgreja />,
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
};

export default Routers;
