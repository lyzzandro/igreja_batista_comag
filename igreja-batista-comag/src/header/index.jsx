import "./style.css";
import logo from "../../public/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <header>
          <img src={logo} alt="Logo da igreja" />
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Programação</a>
            </li>
            <li>
              <a href="#">Dízimos e Ofertas</a>
            </li>
            <li>
              <a href="#">Cultos Gravados</a>
            </li>
            <li>
              <a href="#">Fale Conosco</a>
            </li>
            <li>
              <a href="#">Localização</a>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default Header;
