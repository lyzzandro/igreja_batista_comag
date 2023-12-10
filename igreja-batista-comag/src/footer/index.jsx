import "./style.css";
import logo from "../../public/logo.png";
import email from "../../public/Email icon.svg";
import instagram from "../../public/IG icon.svg";
import facebook from "../../public/Facebook icon.svg";
import youtube from "../../public/Youtube icon.svg";

function SectionFooter() {
  return (
    <div className="footer">
      <div className="container">
        <div className="links">
          <div className="col-links">
            <p className="title-links">Contato</p>
            <a href="" className="link">
              <p>ibcomag@gmail.com</p>
            </a>
            <a href="" className="link">
              <p>+55 (83) 99109-0097</p>
            </a>
            <a href="" className="link">
              <p>+55 (83) 99160-7575</p>
            </a>
          </div>
          <div className="col-links">
            <p className="title-links">Endereço</p>
            <a href="" className="link">
              <p>Rua Adilmar de Paiva Gadelha, 01</p>
            </a>
            <a href="" className="link">
              <p>Bairro André Gadelha</p>
            </a>
            <a href="" className="link">
              <p>Sousa, PB</p>
            </a>
          </div>
          <div className="col-links">
            <p className="title-links">Redes Sociais</p>
            <a href="" className="link">
              <p>Instagram</p>
            </a>
            <a href="" className="link">
              <p>Youtube</p>
            </a>
            <a href="" className="link">
              <p>Facebook</p>
            </a>
          </div>
          <div className="col-links">
            <p className="title-links">Sobre</p>
            <a href="" className="link">
              <p>Nossa História</p>
            </a>
            <a href="" className="link">
              <p>Liderança</p>
            </a>
            <a href="" className="link">
              <p>Ministérios</p>
            </a>
          </div>
        </div>
        <div className="infos">
          <div>
            <a href="#" className="link-logos">
              <img src={logo} alt="Logo igreja" />
            </a>

            <div>
              <p className="link-site">ibcomag.com.br</p>
              <p className="info-site">
                Copyright © 2022 Igreja Batista Comunidade André Gadelha
              </p>
              <p className="info-site">Todos os direitos reservados</p>
            </div>
          </div>
          <div className="social-media">
            <a href="#" className="link-logos">
              <img src={email} alt="Logo email" />
            </a>
            <a href="#" className="link-logos">
              <img src={instagram} alt="Logo instagram" />
            </a>
            <a href="#" className="link-logos">
              <img src={facebook} alt="Logo facebook" />
            </a>
            <a href="#" className="link-logos">
              <img src={youtube} alt="Logo youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFooter;