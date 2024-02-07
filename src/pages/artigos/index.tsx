import React, { useEffect, useState } from "react";
import SectionArtigo from "./components/SectionArtigo";
import { getAllArticles } from "../../services/crud/article";
import AvisoPaginaVazia from "../../components/aviso-pagina-vazia";
import "./style.css";

function Artigos() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function main() {
      const response = await getAllArticles();
      setArticles(response);
    }
    main();
  }, []);

  return (
    <div className="main artigos">
      <div className="container">
        <div className="content">
          <h4 className="bold title">Artigos</h4>
          <div className="section-artigos">
            {articles.length > 0 ? (
              articles.map((data, index) => (
                <SectionArtigo key={`articles-${index}`} {...data} />
              ))
            ) : (
              <AvisoPaginaVazia text="Nenhum artigo encontrado" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artigos;
