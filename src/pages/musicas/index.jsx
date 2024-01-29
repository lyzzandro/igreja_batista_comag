import { useEffect, useState } from "react";
import { getAllMusics } from "../../services/crud/musics";
import SectionMusicas from "./components/SectionMusicas";
import "./style.css";

function Livros() {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    async function main() {
      const response = await getAllMusics();
      setMusics(response);
    }
    main();
  }, []);

  return (
    <div className="main musicas">
      <div className="container">
        <div className="content">
          <h4 className="bold title">Musicas</h4>
          <div className="section-musicas">
            {musics.map((data, index) => (
              <SectionMusicas key={index} {...data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Livros;
