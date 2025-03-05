import "./style.css";

function SectionHero() {
  return (
    <div className="section-hero">
      <div className="container h-max">
        <div className="header-hero">
          <h1 className="bold">IBCOMAG</h1>
          <h2>Uma igreja que ama, uma igreja que ora!</h2>
        </div>

        <a href="#programacao" className="button-link">
          <button className="button-fill">Dias de cultos</button>
        </a>
      </div>
    </div>
  );
}

export default SectionHero;
