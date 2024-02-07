import ButtonDownload from "./ButtonDownload";

function SectionMusicas({ name, sheet_music, letter, audio }) {
  return (
    <div className="musica">
      <div>
        <h5 className="bold title">{name}</h5>
        <div className="div-button">
          <ButtonDownload text="Baixar Cifra" link={sheet_music} />
          <ButtonDownload text="Baixar Letra" link={letter} />
        </div>
        <audio controls src={audio} />
      </div>
    </div>
  );
}

export default SectionMusicas;
