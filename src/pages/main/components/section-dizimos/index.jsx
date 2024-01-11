import { Link } from "react-router-dom";
import "./style.css";
import dizimos from "/bg-dizimos.jpg";

function SectionDizimos() {
  return (
    <div className="section-dizimos" id="dizimos">
      <div className="container">
        <div className="header-dizimos">
          <div>
            <h2 className="bold">Contribua com a obra de Deus</h2>
            <p>
              Sua contribuição é um ato voluntário, uma decisão de amor pela
              obra de Deus e pelas vidas que podem ser abençoadas por meio de
              nossas ações e projetos.
            </p>
          </div>
          <Link to="/doe" className="button-link">
            <button className="button-outline">
              Veja todas as formas de colaborar
            </button>
          </Link>
        </div>
        <img src={dizimos} alt="Imagem dizimos e ofertas" />
      </div>
    </div>
  );
}

export default SectionDizimos;
