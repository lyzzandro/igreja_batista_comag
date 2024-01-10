import "./style.css";
import logo from "/logo.png";

import dizimo from "/favorite_border.svg";
import arrow from "/keyboard_arrow_down.svg";
import article from "/article.svg";
import music from "/music_note.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import ItemDevocionais from "./components/ItemDevocionais";
import ItemLivros from "./components/ItemLivros";
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
            <ItemDevocionais arrow={arrow} />
            <ItemLivros arrow={arrow} />
            <li>
              <a href="#" className="links-header">
                <img src={article} alt="Ícone de igreja" className="icones" />
                ARTIGOS
              </a>
            </li>
            <li>
              <a href="#" className="links-header">
                <img src={music} alt="Ícone de igreja" className="icones" />
                MÚSICAS
              </a>
            </li>
            <li>
              <a href="#" className="links-header">
                <img src={dizimo} alt="Ícone de igreja" className="icones" />
                DOE
              </a>
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
