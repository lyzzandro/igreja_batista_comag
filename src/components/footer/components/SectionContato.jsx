import { Link } from "react-router-dom";

function SectionContato() {
  return (
    <div className="col-links">
      <p className="title-links">Contato</p>
      <Link
        to="mailto:ibcomag@gmail.com"
        target="__blank"
        className="link-footer"
      >
        <p>ibcomag@gmail.com</p>
      </Link>
      <Link
        to="https://web.whatsapp.com/send?phone=5583991940303"
        target="__blank"
        className="link-footer"
      >
        <p>+55 (83) 99194-0303</p>
      </Link>
      <Link
        to="https://web.whatsapp.com/send?phone=5583991607575"
        target="__blank"
        className="link-footer"
      >
        <p>+55 (83) 99160-7575</p>
      </Link>
    </div>
  );
}

export default SectionContato;
