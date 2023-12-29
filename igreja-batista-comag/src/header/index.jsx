import "./style.css";
import logo from "/logo.png";
import menu from "/menu.svg";
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
              <li>Início</li>
            </a>
            <a href="#">
              <li>Programação</li>
            </a>
            <a href="#">
              <li>Dízimos e ofertas</li>
            </a>
            <a href="#">
              <li>Cultos gravados</li>
            </a>
            <a href="#">
              <li>Fale conosco</li>
            </a>
            <a href="">
              <li>Localização</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
