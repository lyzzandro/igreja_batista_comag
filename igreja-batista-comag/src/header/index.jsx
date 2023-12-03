import "./style.css";
import logo from "../../public/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <header>
          <img src={logo} alt="Logo da igreja" />
          <ul>
            <li>Início</li>
            <li>Programação</li>
            <li>Dízimos e Ofertas</li>
            <li>Cultos Gravados</li>
            <li>Fale Conosco</li>
            <li>Localização</li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default Header;
