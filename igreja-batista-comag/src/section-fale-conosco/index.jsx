import "./style.css";
import email from "../../public/email.svg";
import message from "../../public/message.svg";
import person from "../../public/person.svg";

function SectionFaleConosco() {
  return (
    <div className="section-fale-conosco">
      <div className="container">
        <div className="header-fale-conosco">
          <h2 className="bold">Fale Conosco</h2>
          <p>Envie sua mensagem para nós.</p>
        </div>

        <form action="">
          <div className="campos">
            <label htmlFor="nome">
              <img src={person} alt="SVG de uma pessoa" /> Nome
            </label>
            <input
              type="text"
              placeholder="Ex: joaogomes@gmail.com"
              id="nome"
            />
          </div>

          <div className="campos">
            <label htmlFor="email">
              <img src={email} alt="SVG de um email" /> E-mail
            </label>
            <input
              type="text"
              placeholder="Ex: joaogomes@gmail.com"
              id="email"
            />
          </div>

          <div className="campos">
            <label htmlFor="mensagem">
              <img src={message} alt="SVG de uma mensagem" /> Mensagem
            </label>
            <textarea
              placeholder="Ex: joaogomes@gmail.com"
              id="mensagem"
            ></textarea>
          </div>
        </form>

        <button className="button-fill">Enviar mensagem</button>
      </div>
    </div>
  );
}

export default SectionFaleConosco;
