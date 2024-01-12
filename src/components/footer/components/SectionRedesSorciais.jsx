import { Link } from "react-router-dom";

function SectionRedesSorciais() {
  return (
    <div className="col-links">
      <p className="title-links">Redes Sociais</p>
      <Link
        to="https://ibcomag.page.link/instagram"
        target="_blank"
        className="link-footer"
      >
        <p>Instagram</p>
      </Link>
      <Link
        to="https://ibcomag.page.link/youtube"
        target="_blank"
        className="link-footer"
      >
        <p>Youtube</p>
      </Link>
      <Link
        to="https://www.facebook.com/ibcomag"
        target="_blank"
        className="link-footer"
      >
        <p>Facebook</p>
      </Link>
    </div>
  );
}

export default SectionRedesSorciais;
