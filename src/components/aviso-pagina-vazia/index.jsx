import error_outline from "/error_outline.svg";
import "./style.css"

function AvisoPaginaVazia({ text }) {
  return (
    <div className="error-pagina-vazia">
      <img src={error_outline} alt="Icone de exclamação dentro de um circulo" />
      <p className="bold">{text}</p>
    </div>
  );
}

export default AvisoPaginaVazia;
