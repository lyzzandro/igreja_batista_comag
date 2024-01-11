import "../../index.css";
import "./style.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import QrCode from "../../../public/qrcode.jpg";
import Prosalvi from "../../../public/prosalvi-logo.png";

function Doacoes() {
  return (
    <>
      <Header />
      <div className="doacoes">
        <div className="container">
          <div className="content">
            <h4 className="bold">Doações</h4>
            <div className="formas-de-doar">
              <div className="header-doacoes">
                <h6 className="bold">Formas de contribuir</h6>
              </div>
              <div className="content-doacoes">
                <div className="pix">
                  <p className="bold title-pix">Via PIX</p>
                  <p>Nossa chave:</p>
                  <p>
                    CNPJ: <span className="bold"> 00000000000</span>
                  </p>
                  <img src={QrCode} alt="Qrcode do pix da igreja" />
                </div>

                <div className="deposito ">
                  <p className="bold">Depósito bancário</p>
                  <p>Contribua através das nossas contas: </p>
                  <p>
                    CNPJ: <span className="bold"> 00000000000</span>
                  </p>
                  <p>
                    Banco: <span className="bold"> banco</span> ag:{" "}
                    <span className="bold"> 0000</span> c/c{" "}
                    <span className="bold"> 0000000</span>
                  </p>
                  <p>
                    Banco: <span className="bold"> banco</span> ag:{" "}
                    <span className="bold"> 0000</span> c/c{" "}
                    <span className="bold"> 0000000</span>
                  </p>
                </div>

                <div className="igreja ">
                  <p className="bold " id="title-igreja">
                    Na Igreja Batista Comag
                  </p>
                  <p>
                    Faça uma visita e contribua pessoalmente. Rua Adilmar de
                    Paiva Gadelha, 06 - André Gadelha, Sousa - PB, 58806400 -
                    Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="prosalvi">
              <div>
                <div className="header-prosalvi">
                  <img src={Prosalvi} alt="Logo do Prosalvi" />
                  <h4>Ajude também o</h4>
                  <h4 className="bold">Projeto Salvando Vidas</h4>
                  <h4>(PROSALVI)</h4>
                </div>
                <div className="pix-prosalvi">
                  <p className="bold">Via PIX</p>
                  <p>Nossa chave:</p>
                  <p>
                    CNPJ: <span className="bold">00000000000</span>
                  </p>
                  <img src={QrCode} alt="QrCode do prosalvi" />
                </div>
              </div>

              <a
                href="https://prosalvi.com.br/"
                target="_blank"
                className="button-link"
              >
                <button className="button-fill">
                  Saber mais sobre o projeto
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Doacoes;
