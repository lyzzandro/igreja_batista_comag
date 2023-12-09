import "./style.css";
import video1 from "../../public/video1.jpg";
import video2 from "../../public/video2.jpg";
import video3 from "../../public/video3.jpg";
import youtube from "../../public/youtube.svg";

function SectionCultos() {
  return (
    <div className="section-cultos">
      <div className="container">
        <div className="header-cultos">
          <h2 className="bold">Cultos Gravados</h2>
          <p>
            Assista nossas pregações na íntegra através do nosso canal do
            YouTube.
          </p>
        </div>
        <div className="capas-youtube">
          <a href="https://www.youtube.com/watch?v=e9KZp37xJtM&t=1047s">
            <img src={video1} alt="Capa do vídeo youtube" />
          </a>
          <a href="https://www.youtube.com/watch?v=WzmzUXyZDy0&t=820s">
            <img src={video2} alt="Capa do vídeo youtube" />
          </a>
          <a href="https://www.youtube.com/watch?v=XOMIHSBLrAI&t=60s">
            <img src={video3} alt="Capa do vídeo youtube" />
          </a>
        </div>

        <button className="button-fill youtube">
          <img src={youtube} alt="Logomarca do youtube" />
          Nosso canal no YouTube
        </button>
      </div>
    </div>
  );
}

export default SectionCultos;
