import { Link } from "react-router-dom";

function SectionSobre() {
  return (
    <div className="col-links">
      <p className="title-links">Sobre</p>
      <Link to="/missao_e_proposito" className="link-footer">
        <p>Nossa missão e propósito</p>
      </Link>
      <Link to="/em_que_cremos" className="link-footer">
        <p>Em que cremos</p>
      </Link>
      <Link to="/historia_da_igreja" className="link-footer">
        <p>História da Igreja</p>
      </Link>
      <Link to="/contato" className="link-footer">
        <p>Contato</p>
      </Link>
      <Link to="/localizacao" className="link-footer">
        <p>Localização</p>
      </Link>
    </div>
  );
}

export default SectionSobre;
