import "./style.css";
import logo from "/logo2.png";
import email from "/Email icon.svg";
import instagram from "/IG icon.svg";
import facebook from "/Facebook icon.svg";
import youtube from "/Youtube icon.svg";

function SectionFooter() {
  return (
    <div className="footer">
      <div className="container">
        <div className="links">
          <div className="col-links">
            <p className="title-links">Contato</p>
            <a
              href="mailto:ibcomag@gmail.com"
              target="__blank"
              className="link-footer"
            >
              <p>ibcomag@gmail.com</p>
            </a>
            <a
              href="https://web.whatsapp.com/send?phone=5583991940303"
              target="__blank"
              className="link-footer"
            >
              <p>+55 (83) 99194-0303</p>
            </a>
            <a
              href="https://web.whatsapp.com/send?phone=5583991607575"
              target="__blank"
              className="link-footer"
            >
              <p>+55 (83) 99160-7575</p>
            </a>
          </div>
          <div className="col-links">
            <p className="title-links">Endereço</p>
            <a
              href="https://maps.app.goo.gl/b82L8EK2iUGraoDg7"
              target="__blank"
              className="link-footer"
            >
              <p>Rua Adilmar de Paiva Gadelha, 01</p>
            </a>
            <a
              href="https://maps.app.goo.gl/b82L8EK2iUGraoDg7"
              target="__blank"
              className="link-footer"
            >
              <p>Bairro André Gadelha</p>
            </a>
            <a
              href="https://maps.app.goo.gl/b82L8EK2iUGraoDg7"
              target="__blank"
              className="link-footer"
            >
              <p>Sousa, PB</p>
            </a>
          </div>
          <div className="col-links">
            <p className="title-links">Redes Sociais</p>
            <a
              href="https://ibcomag.page.link/instagram"
              target="__blank"
              className="link-footer"
            >
              <p>Instagram</p>
            </a>
            <a
              href="https://ibcomag.page.link/youtube"
              target="__blank"
              className="link-footer"
            >
              <p>Youtube</p>
            </a>
            <a
              href="https://www.facebook.com/ibcomag"
              target="__blank"
              className="link-footer"
            >
              <p>Facebook</p>
            </a>
          </div>
          <div className="col-links">
            <p className="title-links">Sobre</p>
            <a href="#" className="link-footer">
              <p>Nossa História</p>
            </a>
            <a href="#" className="link-footer">
              <p>Liderança</p>
            </a>
            <a href="#" className="link-footer">
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
                Copyright © 2024 Igreja Batista Comunidade André Gadelha
              </p>
              <p className="info-site">Todos os direitos reservados</p>
            </div>
          </div>
          <div className="social-media">
            <a
              href="mailto:ibcomag@gmail.com"
              target="__blank"
              className="link-logos"
            >
              <img src={email} alt="Logo email" />
            </a>
            <a
              href="https://ibcomag.page.link/instagram"
              target="__blank"
              className="link-logos"
            >
              <img src={instagram} alt="Logo instagram" />
            </a>
            <a
              href="https://www.facebook.com/ibcomag"
              target="__blank"
              className="link-logos"
            >
              <img src={facebook} alt="Logo facebook" />
            </a>
            <a
              href="https://ibcomag.page.link/youtube"
              target="__blank"
              className="link-logos"
            >
              <img src={youtube} alt="Logo youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFooter;
