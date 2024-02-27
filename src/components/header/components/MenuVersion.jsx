import programacaoWhite from "/watch_later-white.svg";
import bookWhite from "/book-white.svg";
import dizimoWhite from "/favorite_border-white.svg";
import churchWhite from "/church-white.svg";
import articleWhite from "/article-white.svg";
import musicWhite from "/music_note-white.svg";
import arrow from "/keyboard_arrow_down.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

import ItemSobre from "./ItemSobre";

function ButtonExpandItemSobre() {
  const [active, setActive] = useState(false);
  const classActive = active ? "active" : "";
  return (
    <Link
      to="#"
      onClick={() => setActive(!active)}
      className={`links-header ${classActive}`}
      style={{ background: active ? "var(--yellow-600)" : "var(--blue-600)" }}
    >
      <span>
        <img src={churchWhite} alt="Ícone de igreja" className="icones" />
        SOBRE
      </span>
      <img src={arrow} alt="Ícone de seta pra baixo" className="icones arrow" />
    </Link>
  );
}

function MenuVersion({ isVisible }) {
  return (
    <div
      className="menu"
      style={{ transform: isVisible ? "translate(400px)" : "translate(0px)" }}
    >
      <ul className="menu-responsive">
        <ItemSobre>
          <ButtonExpandItemSobre />
        </ItemSobre>
        <li>
          <Link to="/devocionais">
            <img src={programacaoWhite} alt="Ícone de relógio" />
            DEVOCIONAIS
          </Link>
        </li>
        <li>
          <Link to="/livros">
            <img src={bookWhite} alt="Ícone de livro" />
            LIVROS
          </Link>
        </li>
        <li>
          <Link to="/artigos">
            <img src={articleWhite} alt="Ícone de coração" />
            ARTIGOS
          </Link>
        </li>
        <li>
          <Link to="/musicas">
            <img src={musicWhite} alt="Ícone de câmera" />
            MÚSICAS
          </Link>
        </li>
        <li>
          <Link to="/doe">
            <img src={dizimoWhite} alt="Ícone de telefone" />
            DOE
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuVersion;
