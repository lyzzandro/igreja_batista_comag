import Main from "./pages/main";
import EmQueCremos from "./pages/em-que-cremos";
import MissaoEProposito from "./pages/missao-e-proposito";
import HistoriaDaIgreja from "./pages/historia-da-igreja";
import Contato from "./pages/contato";
import Localizacao from "./pages/localizacao";
import Doacoes from "./pages/doacoes";
import Devocional from "./pages/devocional";
import Artigos from "./pages/artigos";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Footer from "./components/footer";
import Header from "./components/header";

const TemplatePage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const routerPublic = createBrowserRouter([
  {
    element: <TemplatePage />,
    children: [
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
      {
        path: "/doe",
        element: <Doacoes />,
      },
      {
        path: "/devocional/:id",
        element: <Devocional />
      },
      {
        path: "/artigos/",
        element: <Artigos />
      }
    ],
  },
]);

const Routers = () => {
  return <RouterProvider router={routerPublic} />;
};

export default Routers;
