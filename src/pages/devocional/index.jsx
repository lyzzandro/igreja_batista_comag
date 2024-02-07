import { useEffect, useState } from "react";
import SectionDevocional from "./components/SectionDevocional";
import { getAllDevotionals } from "../../services/crud/devotional";
import "./style.css";

function Devocionais() {
  const [devocional, setDevocional] = useState([]);

  useEffect(() => {
    async function main() {
      const response = await getAllDevotionals();
      setDevocional(response);
    }
    main();
  }, []);

  return (
    <div className="main devocionais">
      <div className="container">
        <div className="content">
          <h4 className="bold title">Devocionais</h4>
          <div className="section-devocional">
            {devocional.map((data, index) => (
              <SectionDevocional key={`devotional-${index}`} {...data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Devocionais;
