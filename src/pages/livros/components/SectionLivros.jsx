import { Link } from "react-router-dom";

function SectionLivros({ id, name, auth, synopsis, image }) {
  return (
    <div className="livro">
      <img src={image} alt="Imagem para o artigo" />
      <span>
        <h5 className="bold">{name}</h5>
        <p className="bold">{auth}</p>
      </span>
      <div>
        <p>{synopsis}</p>
        <Link to={`/livros/${id}`} className="button">
          LER SINOPSE COMPLETA
        </Link>
      </div>
    </div>
  );
}

export default SectionLivros;
