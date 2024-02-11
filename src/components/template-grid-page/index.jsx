import { useState } from "react";

import AvisoPaginaVazia from "../aviso-pagina-vazia";
import loadingAnimation from "/loading.gif";
import "./style.css";

import api from "../../api";

function TemplateGrid({ SectionGrid, listData, title, singleName }) {
  const [loading, setLoading] = useState(true);

  api.interceptors.response.use((response) => {
    setLoading(false);
    return response;
  }, null);

  function ComponentRender() {
    return listData.length > 0 ? (
      listData.map((data, index) => (
        <SectionGrid key={`grid-${index}`} {...data} />
      ))
    ) : (
      <AvisoPaginaVazia text={`Nenhum ${singleName} encontrado`} />
    );
  }

  return (
    <div className="main grid">
      <div className="container">
        <div className="content">
          <h4 className="bold title">{title}</h4>
          {loading ? (
            <div className="item-center">
              <img src={loadingAnimation} alt="loading..." />
            </div>
          ) : (
            <div className="section-grid-item">
              <ComponentRender />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TemplateGrid;
