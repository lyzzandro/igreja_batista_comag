import "./style.css";
import "../../index.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import igreja from "../../../public/imagem-igreja.jpg";
import label from "../../../public/label-igreja.svg";

function MissaoEProposito() {
  return (
    <>
      <Header />
      <div className="missao-e-proposito">
        <div className="container">
          <div className="content">
            <img src={label} alt="Imagem da igreja" />
            <h4 className="bold">Nossa missão e propósito</h4>
            <p>
              Fundada em 2005, a Igreja Batista Comunidade André Gadelha
              (IBComag) tem como missão trazer pessoas a Jesus, edificar os
              cristãos e juntos adorarmos a Deus, servindo a Cristo na
              comunidade do Bairro André Gadelha e no mundo. Sendo assim,
              acreditamos que através do Amor, da Fé e do Serviço, seremos um
              referencial de igreja evangelizadora, engajada, acolhedora,
              consagrada e que, por meio da capacitação de discípulos, faremos
              diferença neste mundo.
            </p>
          </div>
          <img src={igreja} alt="Imagem da igreja" className="imagem" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MissaoEProposito;
