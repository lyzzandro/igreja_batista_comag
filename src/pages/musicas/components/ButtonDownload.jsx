import download from "/download.svg";

function ButtonDownload({ text, link }) {
  return (
    <a href={link} download>
      <img src={download} alt="Baixar" />
      {text}
    </a>
  );
}

export default ButtonDownload;
