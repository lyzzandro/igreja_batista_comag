import "./style.css";
import email from "/email.svg";
import message from "/message.svg";
import person from "/person.svg";

function SectionFaleConosco() {
  return (
    <div className="section-fale-conosco" id="fale-conosco">
      <div className="container">
        <div className="header-fale-conosco">
          <h2 className="bold">Fale conosco</h2>
          <p>Envie sua mensagem para nós</p>
        </div>

        <form action="https://formsubmit.co/ibcomag@gmail.com" method="POST">
          <div className="campos">
            <label htmlFor="nome">
              <img src={person} alt="SVG de uma pessoa" /> Nome
            </label>
            <input
              type="text"
              placeholder="Ex: Lucas Silva"
              id="nome"
              name="name"
              required
            />
          </div>

          <div className="campos">
            <label htmlFor="email">
              <img src={email} alt="SVG de um email" /> E-mail
            </label>
            <input
              type="text"
              placeholder="Ex: lucas@gmail.com"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="campos">
            <label htmlFor="mensagem">
              <img src={message} alt="SVG de uma mensagem" /> Mensagem
            </label>
            <textarea
              placeholder="Escreva sua mensagem"
              id="mensagem"
              name="message"
              required
            ></textarea>
          </div>
          <button className="button-fill" type="submit">
            Enviar mensagem
          </button>
        </form>
      </div>
    </div>
  );
}

export default SectionFaleConosco;
