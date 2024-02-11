import { Link } from "react-router-dom";
import { formatDate } from "../../services/date";
import "./style.css"

function Card({ id, name, image, auth, date, path }) {
  return (
    <Link to={`/${path}/${id}`} className="card">
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

export default Card;
