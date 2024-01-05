import "./style.css";

function SectionLocalizacao() {
  return (
    <div className="section-localizacao" id="localizacao">
      <div className="container">
        <div className="map">
          <iframe
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.63492097618075!2d-38.243943254313706!3d-6.750487142686761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a45ea7c18f3181%3A0xc7c7801d67e494a9!2sIgreja%20BATISTA%20COMAG!5e0!3m2!1spt-BR!2sbr!4v1702170000309!5m2!1spt-BR!2sbr"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default SectionLocalizacao;
