import "./style.css";
import logo from "/logo.png";
import inicio from "/home.svg";
import programacao from "/watch_later.svg";
import recursos from "/menu_book.svg";
import dizimo from "/favorite_border.svg";
import cultos from "/camera_alt.svg";
import fale_conosco from "/phone_enabled.svg";
import localizacao from "/place.svg";
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
                Início
              </a>
            </li>
            <li>
              <a href="#" className="links-header">
                Programação
              </a>
            </li>
            <li>
              <a href="#" className="links-header">
                Dízimos e Ofertas
              </a>
            </li>
            <li>
              <a href="#" className="links-header">
                Cultos Gravados
              </a>
            </li>
            <li>
              <a href="#" className="links-header">
                Fale Conosco
              </a>
            </li>
            <li>
              <a href="#" className="links-header">
                Localização
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
                <img src={recursos} alt="Ícone de relógio" />
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
