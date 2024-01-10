import { Link } from "react-router-dom";

function SectionSobre() {
  return (
    <div className="col-links">
      <p className="title-links">Sobre</p>
      <Link to="#" className="link-footer">
        <p>Nossa História</p>
      </Link>
      <Link to="#" className="link-footer">
        <p>Liderança</p>
      </Link>
      <Link to="#" className="link-footer">
        <p>Ministérios</p>
      </Link>
    </div>
  );
}

export default SectionSobre;
