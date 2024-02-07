import { Link } from "react-router-dom";
import church from "/church.svg";

function ItemSobre({ arrow, children }) {
  const elementButton = children || (
    <Link to="#" className="links-header">
      <img src={church} alt="Ícone de igreja" className="icones" />
      SOBRE
      <img src={arrow} alt="Ícone de seta pra baixo" className="icones arrow" />
    </Link>
  );
  return (
    <li>
      {elementButton}
      <ul className="dropdown">
        <li>
          <Link to="/missao_e_proposito">Nossa missão e propósito</Link>
        </li>
        <li>
          <Link to="/em_que_cremos">Em que cremos</Link>
        </li>
        <li>
          <Link to="/historia_da_igreja">História da Igreja</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li>
          <Link to="/localizacao">Localização</Link>
        </li>
      </ul>
    </li>
  );
}

export default ItemSobre;
