import { useState } from "react";
import AvisoPaginaVazia from "../aviso-pagina-vazia";
import "./style.css";
import Loading from "../loading";

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
        <SectionGrid
        path={title.toLowerCase()}
          key={`grid-${index}`}
          {...data}
        />
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
            <Loading />
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
