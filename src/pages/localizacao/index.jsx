import "./style.css";
import "../../index.css";

import SectionLocalizacao from "../../components/section-localizacao";
import FaleConosco from "../../components/section-fale-conosco";
import Email from "../../../public/email-icon.svg";
import WhatsApp from "../../../public/whatsapp-icon.svg";

function Localizacao() {
  return (
    <div className="localizacao">
      <div className="container">
        <div className="content">
          <h4 className="bold">Localização</h4>
          <div className="localizacao-whatsapp">
            <div className="header-localizacao">
              <h6 className="bold">Endereço</h6>
            </div>
            <div className="content-localizacao">
              <p>
                <a href="https://wa.me/5583991940303" target="_blank">
                  Rua Adilmar da Paiva Gadelha, 06
                </a>
              </p>
              <p>
                <a href="https://wa.me/5583991607575" target="_blank">
                  André Gadelha
                </a>
              </p>
              <p>
                <a href="https://wa.me/5583991607575" target="_blank">
                  58806-400
                </a>
              </p>
              <p>
                <a href="https://wa.me/5583991607575" target="_blank">
                  Sousa, PB - Brasil
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="content">
          <h4 className="bold">Mapa</h4>

          <SectionLocalizacao />
        </div>
      </div>
    </div>
  );
}

export default Localizacao;
