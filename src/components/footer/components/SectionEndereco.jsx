import { Link } from "react-router-dom";

function SectionEndereco() {
  return (
    <div className="col-links">
      <p className="title-links">Endereço</p>
      <Link
        to="https://maps.app.goo.gl/b82L8EK2iUGraoDg7"
        target="_blank"
        className="link-footer"
      >
        <p>Rua Adilmar de Paiva Gadelha, 01</p>
      </Link>
      <Link
        to="https://maps.app.goo.gl/b82L8EK2iUGraoDg7"
        target="_blank"
        className="link-footer"
      >
        <p>Bairro André Gadelha</p>
      </Link>
      <Link
        to="https://maps.app.goo.gl/b82L8EK2iUGraoDg7"
        target="_blank"
        className="link-footer"
      >
        <p>Sousa, PB</p>
      </Link>
    </div>
  );
}

export default SectionEndereco;
