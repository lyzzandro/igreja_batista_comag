import { Link } from "react-router-dom";
import book from "/book.svg";

function ItemLivros({ arrow }) {
  return (
    <li>
      <a href="#" className="links-header">
        <img src={book} alt="Ícone de livro" className="icones" />
        LIVROS
        <img
          src={arrow}
          alt="Ícone de seta pra baixo"
          className="icones arrow"
        />
      </a>
      <ul className="dropdown">
        <li>
          <Link to="https://loja.uiclap.com/titulo/ua10433/" target="_blank">
            Angelologia (Pr. Joselito Garrido Fernandes)
          </Link>
        </li>
        <li>
          <Link to="https://loja.uiclap.com/titulo/ua12715/" target="_blank">
            O Caminho Da Oração (Pr. Joselito Garrido Fernandes)
          </Link>
        </li>
        <li>
          <Link to="https://loja.uiclap.com/titulo/ua47600/" target="_blank">
            Fé, perseverança e firmeza com Cristo (Pr. Joselito Garrido
            Fernandes)
          </Link>
        </li>
      </ul>
    </li>
  );
}

export default ItemLivros;
