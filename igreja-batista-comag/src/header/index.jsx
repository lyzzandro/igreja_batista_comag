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
        </header>
      </div>
    </div>
  );
}

export default Header;
