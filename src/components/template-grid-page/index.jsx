import { useState } from "react";
import AvisoPaginaVazia from "../aviso-pagina-vazia";
import "./style.css";
import Loading from "../loading";

import { handleResponse } from "../../api";

function TemplateGrid({ SectionGrid, listData, title, singleName }) {
  const [loading, setLoading] = useState(true);

  handleResponse(() => setLoading(false));

  function ComponentRender() {
    return (
      <div className="section-grid-item">
        {listData.length > 0 ? (
          listData.map((data, index) => (
            <SectionGrid
              path={title.toLowerCase()}
              key={`grid-${index}`}
              {...data}
            />
          ))
        ) : (
          <AvisoPaginaVazia text={`Nenhum ${singleName} encontrado`} />
        )}
      </div>
    );
  }

  return (
    <div className="main grid">
      <div className="container">
        <div className="content">
          <h4 className="bold title">{title}</h4>
          {loading ? <Loading /> : <ComponentRender />}
        </div>
      </div>
    </div>
  );
}

export default TemplateGrid;
