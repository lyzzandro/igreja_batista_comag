import "./style.css";
import video1 from "/video1.jpg";
import video2 from "/video2.jpg";
import video3 from "/video3.jpg";
import youtube from "/youtube.svg";

function SectionCultos() {
  return (
    <div className="section-cultos" id="cultos">
      <div className="container">
        <div className="header-cultos">
          <h2 className="bold">Cultos gravados</h2>
          <p>
            Assista nossas pregações na íntegra através do nosso canal do
            YouTube
          </p>
        </div>
        <div className="capas-youtube">
          <a
            href="https://www.youtube.com/watch?v=e9KZp37xJtM&t=1047s"
            target="__blank"
          >
            <img src={video1} alt="Capa do vídeo youtube" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=WzmzUXyZDy0&t=820s"
            target="__blank"
          >
            <img src={video2} alt="Capa do vídeo youtube" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=XOMIHSBLrAI&t=60s"
            target="__blank"
          >
            <img src={video3} alt="Capa do vídeo youtube" />
          </a>
        </div>

        <a
          href="https://ibcomag.page.link/youtube"
          target="__blank"
          className="button-link"
        >
          <button className="button-fill youtube">
            <img src={youtube} alt="Logo do youtube" />
            Nosso canal no YouTube
          </button>
        </a>
      </div>
    </div>
  );
}

export default SectionCultos;
