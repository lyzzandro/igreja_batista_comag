import React, { useEffect, useState } from "react";
import SectionArtigo from "./components/SectionArtigo";
import { getAllArticles } from "../../services/crud/article";
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
    <div className="main-artigos">
      <h4 className="bold title">Artigos</h4>
      <div className="section-artigos">
        {articles.map((data) => (
          <SectionArtigo {...data} />
        ))}
      </div>
    </div>
  );
}

export default Artigos;
