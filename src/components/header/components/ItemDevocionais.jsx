import { Link } from "react-router-dom";
import programacao from "/watch_later.svg";
import { useEffect, useState } from "react";
import { getDevocionais } from "../../../services/notion";

function ItemDevocionais({ arrow }) {
  const [devocionais, setDevocionais] = useState([]);
  useEffect(() => {
    async function main() {
      setDevocionais(getDevocionais());
    }
    main();
  });
  return (
    <li>
      <a href="#" className="links-header">
        <img src={programacao} alt="Ícone de relógio" className="icones " />
        DEVOCIONAIS
        <img
          src={arrow}
          alt="Ícone de seta pra baixo"
          className="icones arrow"
        />
      </a>
      <ul className="dropdown">
        <li>
          <Link to="#">Promessas Preciosas (Charles Spurgen)</Link>
        </li>
        <li>
          <Link to="#">Devocional Diária (Pr. Joselito Garrido Fernandes)</Link>
        </li>
      </ul>
    </li>
  );
}

export default ItemDevocionais;
