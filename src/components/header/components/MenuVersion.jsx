import programacaoWhite from "/watch_later-white.svg";
import bookWhite from "/book-white.svg";
import dizimoWhite from "/favorite_border-white.svg";
import churchWhite from "/church-white.svg";
import articleWhite from "/article-white.svg";
import musicWhite from "/music_note-white.svg";
import { Link } from "react-router-dom";

function MenuVersion({ isVisible }) {
  return (
    <div
      className="menu"
      style={{ transform: isVisible ? "translate(400px)" : "translate(0px)" }}
    >
      <ul>
        <li>
          <Link to="#">
            <img src={churchWhite} alt="Ícone de incício" />
            SOBRE
          </Link>
        </li>

        <li>
          <Link to="#">
            <img src={programacaoWhite} alt="Ícone de relógio" />
            DEVOCIONAIS
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={bookWhite} alt="Ícone de livro" />
            LIVROS
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={articleWhite} alt="Ícone de coração" />
            ARTIGOS
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={musicWhite} alt="Ícone de câmera" />
            MÚSICAS
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={dizimoWhite} alt="Ícone de telefone" />
            DOE
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuVersion;
