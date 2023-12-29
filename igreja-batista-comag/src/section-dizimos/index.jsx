import "./style.css";
import dizimos from "/bg-dizimos.jpg";

function SectionDizimos() {
  return (
    <div className="section-dizimos">
      <div className="container">
        <div className="header-dizimos">
          <div>
            <h2 className="bold">Dízimos e Ofertas</h2>
            <p>
              Sua doação é um ato de amor e compromisso com a obra do Senhor e
              sua igreja local. Muito obrigado!
            </p>
          </div>
          <button className="button-outline">
            Veja todas as formas de colaborar
          </button>
        </div>
        <img src={dizimos} alt="Imagem dizimos e ofertas" />
      </div>
    </div>
  );
}

export default SectionDizimos;
