import { Link } from "react-router-dom";
import progamation_icon from "/watch_later.svg";
import { useEffect, useState } from "react";
import { getAllDevotionals } from "../../../services/crud/devotional";

function ItemDevocionais({ arrow }) {
  const [devotionals, setDevotionals] = useState([]);
  
  useEffect(() => {
    async function main() {
      const response = await getAllDevotionals();
      setDevotionals(response);
    }
    main();
  }, []);

  return (
    <li>
      <Link to="/devocionais" className="links-header">
        <img
          src={progamation_icon}
          alt="Ícone de relógio"
          className="icones "
        />
        DEVOCIONAIS
        <img
          src={arrow}
          alt="Ícone de seta pra baixo"
          className="icones arrow"
        />
      </Link>
      <ul className="dropdown">
        {devotionals.map((data, key) => (
          <li key={`devotional-${key}`}>
            <Link to={`/devocionais/${data.id}`}>
              {data.name} ({data.auth})
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default ItemDevocionais;
