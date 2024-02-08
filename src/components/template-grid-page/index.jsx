import AvisoPaginaVazia from "../aviso-pagina-vazia";
import "./style.css";

function TemplateGrid({ SectionGrid, listData, title, singleName }) {
  return (
    <div className="main grid">
      <div className="container">
        <div className="content">
          <h4 className="bold title">{title}</h4>
          <div className="section-grid-item">
            {listData.length > 0 ? (
              listData.map((data, index) => (
                <SectionGrid key={`grid-${index}`} {...data} />
              ))
            ) : (
              <AvisoPaginaVazia text={`Nenhum ${singleName} encontrado`} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateGrid;
