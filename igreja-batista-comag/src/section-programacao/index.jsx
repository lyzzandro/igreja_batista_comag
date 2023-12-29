import "./style.css";
import relogio from "/relogio.svg";

function SectionProgramacao() {
  return (
    <div className="section-programacao">
      <div className="container">
        <div className="header-programacao">
          <h2 className="bold">Programação</h2>
          <p>
            Temos uma agenda semanal cheia, venha e participe dos nossos cultos!
          </p>
        </div>

        <div className="horarios">
          <div className="horario">
            <div className="dia">
              <p>DOMINGO</p>
            </div>
            <div className="info">
              <p>Culto Celebrativo</p>
              <div className="hora">
                <img src={relogio} alt="Imagem de um relógio" />
                <p>19:00h</p>
              </div>
            </div>
          </div>

          <div className="horario">
            <div className="dia">
              <p>TERÇA-FEIRA</p>
            </div>
            <div className="info">
              <p>Culto de Oração e Doutrina</p>
              <div className="hora">
                <img src={relogio} alt="Imagem de um relógio" />
                <p>19:30h</p>
              </div>
            </div>
          </div>

          <div className="horario">
            <div className="dia">
              <p>QUINTA-FEIRA</p>
            </div>
            <div className="info">
              <p>Culto de Oração e Doutrina</p>
              <div className="hora">
                <img src={relogio} alt="Imagem de um relógio" />
                <p>19:30h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionProgramacao;
