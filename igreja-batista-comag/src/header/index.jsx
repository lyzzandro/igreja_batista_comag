import "./style.css";
import logo from "/logo.png";
import inicio from "/home.svg";
import programacao from "/watch_later.svg";
import book from "/book.svg";
import dizimo from "/favorite_border.svg";
import cultos from "/camera_alt.svg";
import fale_conosco from "/phone_enabled.svg";
import localizacao from "/place.svg";
import arrow from "/keyboard_arrow_down.svg";
import church from "/church.svg";
import article from "/article.svg";
import music from "/music_note.svg";
import React, { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="header">
      <div className="container">
        <header>
          <img src={logo} alt="Logo da igreja" />
          <ul>
            <li>
              <a href="#" className="links-header">
                <img src={church} alt="Ícone de igreja" className='icones'/>
                SOBRE
                <img src={arrow} alt="Ícone de seta pra baixo" className='icones'/>
              </a>
              <ul className="dropdown">
                <li>
                  <a href="#">Quem somos</a>
                </li>
                <li>
                  <a href="#">O Que Cremos</a>
                </li>
                <li>
                  <a href="#fale-conosco">Contato</a>
                </li>
                <li>
                  <a href="#localizacao">Localização</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#programacao" className="links-header">
                <img src={programacao} alt="Ícone de relógio" className='icones'/>
                DEVOCINONAIS
                <img src={arrow} alt="Ícone de seta pra baixo" className='icones'/>
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
              <a href="#dizimos" className="links-header">
              <img src={book} alt="Ícone de livro" className='icones'/>
                LIVROS
                <img src={arrow} alt="Ícone de seta pra baixo" className='icones'/>
              </a>
              <ul className="dropdown">
                <li>
                  <a href="#">Angelologia (Pr. Joselito Garrido Fernandes)</a>
                </li>
                <li>
                  <a href="#">
                    O Caminho Da Oração (Pr. Joselito Garrido Fernandes)
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#cultos" className="links-header">
              <img src={article} alt="Ícone de igreja" className='icones'/>
                ARTIGOS
              </a>
            </li>
            <li>
              <a href="#fale-conosco" className="links-header">
              <img src={music} alt="Ícone de igreja" className='icones'/>
                MÚSICAS
              </a>
            </li>
            <li>
              <a href="#localizacao" className="links-header">
              <img src={dizimo} alt="Ícone de igreja" className='icones'/>
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
            <a href="#">
              <li>
                <img src={inicio} alt="Ícone de incício" />
                Início
              </li>
            </a>
            <a href="#programacao">
              <li>
                <img src={programacao} alt="Ícone de relógio" />
                Programação
              </li>
            </a>
            <a href="#">
              <li>
                <img src={book} alt="Ícone de livro" />
                Recursos
              </li>
            </a>
            <a href="#dizimos">
              <li>
                <img src={dizimo} alt="Ícone de coração" />
                Dízimos e ofertas
              </li>
            </a>
            <a href="#cultos">
              <li>
                <img src={cultos} alt="Ícone de câmera" />
                Cultos gravados
              </li>
            </a>
            <a href="#fale-conosco">
              <li>
                <img src={fale_conosco} alt="Ícone de telefone" />
                Fale conosco
              </li>
            </a>
            <a href="#localizacao">
              <li>
                <img src={localizacao} alt="Ícone de pin" />
                Localização
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
