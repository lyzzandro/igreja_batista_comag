import { Link } from "react-router-dom";
import { formatDate } from "../../../services/date";

function SectionArtigo({ id, name, image, auth, date }) {
  return (
    <Link to={`/artigos/${id}`} className="artigo">
      <img src={image} alt="Imagem para o artigo" />
      <span>
        <h6 className="bold title">{name}</h6>
        <p>
          por <span className="bold">{auth} -</span> em
        </p>
        <p>{formatDate(date)}</p>
      </span>
    </Link>
  );
}

export default SectionArtigo;
