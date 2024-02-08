import { getAllBooks } from "../../services/crud/books";
import SectionLivros from "./components/SectionLivros";
import useResources from "../../components/useResource";
import TemplateGrid from "../../components/template-grid-page";
import "./style.css";

function Livros() {
  const books = useResources(getAllBooks);

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
