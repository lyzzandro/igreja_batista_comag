import "./style.css";
import "../../index.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import FaleConosco from "../../components/section-fale-conosco";
import Email from "../../../public/email-icon.svg";
import WhatsApp from "../../../public/whatsapp-icon.svg";

function Contato() {
  return (
    <>
      <Header />
      <div className="contato">
        <div className="container">
          <div className="content">
            <h4 className="bold">Contatos</h4>
            <div className="contato-whatsapp">
              <div className="header-contatos">
                <img src={WhatsApp} alt="ícone do WhatsApp " />
                <h6 className="bold">WhatsApp</h6>
              </div>
              <div className="content-contato">
                <p>
                  <a href="https://wa.me/5583991940303" target="_blank">
                    +55 (83) 99109-0097{" "}
                  </a>

                  <span>(Pr. Joselito Garrido Fernandes)</span>
                </p>
                <p>
                  <a href="https://wa.me/5583991607575" target="_blank">
                    +55 (83) 99160-75757
                  </a>
                  <span>(Pr. Lucélio Silva)</span>
                </p>
              </div>
            </div>

            <div className="contato-email">
              <div className="header-contatos">
                <img src={Email} alt="ícone do WhatsApp " />
                <h6 className="bold">E-mail</h6>
              </div>

              <div className="content-contato">
                <p>
                  <a href="mailto:ibcomag@gmail.com" target="_blank">
                    ibcomag@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <FaleConosco />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contato;
