import { Link } from "react-router-dom";

function SectionEndereco() {
  return (
    <div className="col-links">
      <p className="title-links">Endereço</p>
      <a
        href="https://maps.app.goo.gl/b82L8EK2iUGraoDg7"
        target="__blank"
        className="link-footer"
      >
        <p>Rua Adilmar de Paiva Gadelha, 01</p>
      </a>
      <a
        href="https://maps.app.goo.gl/b82L8EK2iUGraoDg7"
        target="__blank"
        className="link-footer"
      >
        <p>Bairro André Gadelha</p>
      </a>
      <a
        href="https://maps.app.goo.gl/b82L8EK2iUGraoDg7"
        target="__blank"
        className="link-footer"
      >
        <p>Sousa, PB</p>
      </a>
    </div>
  );
}

export default SectionEndereco;
