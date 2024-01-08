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
          <p>Envie sua mensagem ou seu pedido de oração</p>
        </div>

        <form action="https://formsubmit.co/ibcomag@gmail.com" method="POST">
          <div className="campos">
            <label htmlFor="nome">
              <img src={person} alt="SVG de uma pessoa" />
              <p>Nome</p>
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
              <img src={email} alt="SVG de um email" />
              <p>E-mail</p>
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
              <img src={message} alt="SVG de uma mensagem" />
              <p>Mensagem</p>
            </label>
            <textarea
              placeholder="Escreva sua mensagem"
              id="mensagem"
              name="message"
              required
            ></textarea>
          </div>
          <button className="button-fill" type="submit">
            <p className="bold">Enviar mensagem</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SectionFaleConosco;
