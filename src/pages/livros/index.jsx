import { requestBooks } from "../../services/requests";
import SectionLivros from "./components/SectionLivros";
import useResources from "../../components/useResource";
import TemplateGrid from "../../components/template-grid-page";
import "./style.css";

function Livros() {
  const books = useResources(requestBooks.getAll);

  return (
    <main className="livros">
      <TemplateGrid
        title="Livros"
        singleName="livro"
        SectionGrid={SectionLivros}
        listData={books}
      />
    </main>
  );
}

export default Livros;
