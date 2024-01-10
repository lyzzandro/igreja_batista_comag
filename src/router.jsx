import Main from "./pages/main";
import EmQueCremos from "./pages/em-que-cremos";
import MissaoEProposito from "./pages/missao-e-proposito";
import HistoriaDaIgreja from "./pages/historia-da-igreja";
import Contato from "./pages/contato";
import Localizacao from "./pages/localizacao";
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
    element: <Contato />,
  },
  {
    path: "/localizacao",
    element: <Localizacao />,
  },
]);

const Routers = () => {
  return <RouterProvider router={routerPublic} />;
};

export default Routers;
