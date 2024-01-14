import "./style.css";
import logo from "/logo2.png";
import arrow from "/arrow-up.svg";
import { Link } from "react-router-dom";

import SectionContato from "./components/SectionContato";
import SectionEndereco from "./components/SectionEndereco";
import SectionSobre from "./components/SectionSobre";
import SectionRedesSorciais from "./components/SectionRedesSorciais";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function SectionFooter() {
  return (
    <div className="footer">
      <div className="container">
        <div className="links">
          <SectionContato />
          <SectionEndereco />
          <SectionRedesSorciais />
          <SectionSobre />
        </div>
        <div className="infos">
          <div>
            <a href="#" className="link-logos">
              <img src={logo} alt="Logo igreja" />
            </a>

            <div>
              <p className="link-site">ibcomag.com.br</p>
              <p className="info-site">
                Copyright © 2024 Igreja Batista Comunidade André Gadelha
              </p>
              <p className="info-site">Todos os direitos reservados</p>
            </div>
          </div>
          <div className="btn-voltar">
            <button onClick={scrollToTop}>
              <img src={arrow} alt="" />
              <p className="bold">Voltar ao topo</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFooter;
