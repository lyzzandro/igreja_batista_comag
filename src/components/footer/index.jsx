import "./style.css";
import logo from "/logo2.png";
import email from "/Email icon.svg";
import instagram from "/IG icon.svg";
import facebook from "/Facebook icon.svg";
import youtube from "/Youtube icon.svg";
import { Link } from "react-router-dom";

import SectionContato from "./components/SectionContato";
import SectionEndereco from "./components/SectionEndereco";
import SectionSobre from "./components/SectionSobre";
import SectionRedesSorciais from "./components/SectionRedesSorciais";

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
          <div className="social-media">
            <Link
              href="mailto:ibcomag@gmail.com"
              target="__blank"
              className="link-logos"
            >
              <img src={email} alt="Logo email" />
            </Link>
            <Link
              href="https://ibcomag.page.link/instagram"
              target="__blank"
              className="link-logos"
            >
              <img src={instagram} alt="Logo instagram" />
            </Link>
            <Link
              href="https://www.facebook.com/ibcomag"
              target="__blank"
              className="link-logos"
            >
              <img src={facebook} alt="Logo facebook" />
            </Link>
            <Link
              href="https://ibcomag.page.link/youtube"
              target="__blank"
              className="link-logos"
            >
              <img src={youtube} alt="Logo youtube" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFooter;
