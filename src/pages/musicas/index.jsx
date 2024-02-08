import { getAllMusics } from "../../services/crud/musics";
import SectionMusicas from "./components/SectionMusicas";
import useResources from "../../components/useResource";
import TemplateGrid from "../../components/template-grid-page";
import "./style.css";

function Livros() {
  const musics = useResources(getAllMusics);

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
