import "./style.css";
import logo from "/logo.png";

import dizimo from "/favorite_border.svg";
import arrow from "/keyboard_arrow_down.svg";
import progamation_icon from "/watch_later.svg";
import book from "/book.svg";
import article from "/article.svg";
import music from "/music_note.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemSobre from "./components/ItemSobre";
import MenuVersion from "./components/MenuVersion";

function Header() {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="header">
      <div className="container">
        <header>
          <Link to="/">
            <img src={logo} alt="Logo da igreja" />
          </Link>

          <ul>
            <ItemSobre arrow={arrow} />
            <li>
              <Link to="/devocionais" className="links-header">
                <img
                  src={progamation_icon}
                  alt="Ícone de relógio"
                  className="icones "
                />
                DEVOCIONAIS
              </Link>
            </li>
            <li>
              <Link to="/livros" className="links-header">
                <img src={book} alt="Ícone de livro" className="icones" />
                LIVROS
              </Link>
            </li>
            <li>
              <Link to="/artigos" className="links-header">
                <img src={article} alt="Ícone de igreja" className="icones" />
                ARTIGOS
              </Link>
            </li>
            <li>
              <Link to="/musicas" className="links-header">
                <img src={music} alt="Ícone de igreja" className="icones" />
                MÚSICAS
              </Link>
            </li>
            <li>
              <Link to="/doe" className="links-header">
                <img src={dizimo} alt="Ícone de igreja" className="icones" />
                DOE
              </Link>
            </li>
          </ul>
          <button onClick={handleClick}>
            <img
              src={toggle ? "/menu.svg" : "/close.svg"}
              alt="Logo da igreja"
            />
          </button>
        </header>
        <MenuVersion isVisible={!!toggle} />
      </div>
    </div>
  );
}

export default Header;
