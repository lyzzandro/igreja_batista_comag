import "./style.css";
import logo from "/logo.png";
import programacao from "/watch_later.svg";
import programacaoWhite from "/watch_later-white.svg";
import book from "/book.svg";
import bookWhite from "/book-white.svg";
import dizimo from "/favorite_border.svg";
import dizimoWhite from "/favorite_border-white.svg";
import arrow from "/keyboard_arrow_down.svg";
import church from "/church.svg";
import churchWhite from "/church-white.svg";
import article from "/article.svg";
import articleWhite from "/article-white.svg";
import music from "/music_note.svg";
import musicWhite from "/music_note-white.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            <li>
              <a href="#" className="links-header">
                <img src={church} alt="Ícone de igreja" className="icones" />
                SOBRE
                <img
                  src={arrow}
                  alt="Ícone de seta pra baixo"
                  className="icones arrow"
                />
              </a>
              <ul className="dropdown">
                <li>
                  <Link to="/missao_e_proposito">Nossa missão e propósito</Link>
                </li>
                <li>
                  <Link to="/em_que_cremos">Em que cremos</Link>
                </li>
                <li>
                  <Link to="/historia_da_igreja">História da Igreja</Link>
                </li>
                <li>
                  <Link to="/contato">Contato</Link>
                </li>
                <li>
                  <Link to="/localizacao">Localização</Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="links-header">
                <img
                  src={programacao}
                  alt="Ícone de relógio"
                  className="icones "
                />
                DEVOCIONAIS
                <img
                  src={arrow}
                  alt="Ícone de seta pra baixo"
                  className="icones arrow"
                />
              </a>
              <ul className="dropdown">
                <li>
                  <a href="#">Promessas Preciosas (Charles Spurgen)</a>
                </li>
                <li>
                  <a href="#">
                    Devocional Diária (Pr. Joselito Garrido Fernandes)
                  </a>
                </li>
              </ul>
            </li>
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
                  <a
                    href="https://loja.uiclap.com/titulo/ua10433/"
                    target="_blank"
                  >
                    Angelologia (Pr. Joselito Garrido Fernandes)
                  </a>
                </li>
                <li>
                  <a
                    href="https://loja.uiclap.com/titulo/ua12715/"
                    target="_blank"
                  >
                    O Caminho Da Oração (Pr. Joselito Garrido Fernandes)
                  </a>
                </li>
                <li>
                  <a
                    href="https://loja.uiclap.com/titulo/ua47600/"
                    target="_blank"
                  >
                    Fé, perseverança e firmeza com Cristo (Pr. Joselito Garrido
                    Fernandes)
                  </a>
                </li>
              </ul>
            </li>
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
        <div
          className="menu"
          style={{ transform: toggle ? "translate(400px)" : "translate(0px)" }}
        >
          <ul>
            <li>
              <a href="#">
                <img src={churchWhite} alt="Ícone de incício" />
                SOBRE
              </a>
            </li>

            <li>
              <a href="#">
                <img src={programacaoWhite} alt="Ícone de relógio" />
                DEVOCIONAIS
              </a>
            </li>
            <li>
              <a href="#">
                <img src={bookWhite} alt="Ícone de livro" />
                LIVROS
              </a>
            </li>
            <li>
              <a href="#">
                <img src={articleWhite} alt="Ícone de coração" />
                ARTIGOS
              </a>
            </li>
            <li>
              <a href="#">
                <img src={musicWhite} alt="Ícone de câmera" />
                MÚSICAS
              </a>
            </li>
            <li>
              <a href="#">
                <img src={dizimoWhite} alt="Ícone de telefone" />
                DOE
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
