import { requestMusics } from "../../services/requests";
import SectionMusicas from "./components/SectionMusicas";
import useResources from "../../components/useResource";
import TemplateGrid from "../../components/template-grid-page";
import "./style.css";

function Livros() {
  const musics = useResources(requestMusics.getAll);

  return (
    <main className="musicas">
      <TemplateGrid
        title="Musicas"
        singleName="musica"
        SectionGrid={SectionMusicas}
        listData={musics}
      />
    </main>
  );
}

export default Livros;
