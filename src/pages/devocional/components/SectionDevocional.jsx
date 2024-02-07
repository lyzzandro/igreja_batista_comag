import { Link } from "react-router-dom";
import { formatDate } from "../../../services/date";

function SectionDevocional({ id, name, image, auth, date }) {
  return (
    <Link to={`/devocionais/${id}`} className="devocional">
      <img src={image} alt="Imagem para o devocional" />
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

export default SectionDevocional;
