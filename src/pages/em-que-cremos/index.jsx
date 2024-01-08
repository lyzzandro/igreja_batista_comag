import "./style.css";
import "../../index.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import label from "../../../public/label-igreja.svg";

function EmQueCremos() {
  return (
    <>
      <Header />
      <div className="em-que-cremos">
        <div className="container">
          <div className="content">
            <img src={label} alt="Imagem da igreja" />
            <h4 className="bold">Em que cremos</h4>
            <p>
              • Cremos em um Deus, Pai Todo-Poderoso, Criador do céu e da terra,
              de todas as coisas visíveis e invisíveis.
            </p>
            <p>
              • Cremos no Senhor Jesus Cristo, o unigênito Filho de Deus, gerado
              pelo Pai antes de todos os séculos, Luz de Luz, verdadeiro Deus de
              verdadeiro Deus, gerado, não feito, de uma só substância com o
              Pai; pelo qual todas as coisas foram feitas; o qual, por nós
              homens e por nossa salvação, desceu dos céus, foi feito carne do
              Espírito Santo e da Virgem Maria, e tornou-se homem; e foi
              crucificado por nós sob o poder de Pôncio Pilatos, padeceu, e foi
              sepultado; e ressuscitou ao terceiro dia conforme as Escrituras; e
              subiu aos céus, assentou-se à direita do Pai, e de novo há de vir
              com glória para julgar os vivos e os mortos, e seu reino não terá
              fim.
            </p>
            <p>
              • Cremos no Espírito Santo, Senhor e Vivificador, que procede do
              Pai e do Filho, que com o Pai e o Filho, conjuntamente, é adorado
              e glorificado, que falou através dos profetas.
            </p>
            <p>
              • Cremos na Igreja una, santa, universal e apostólica e,
              confessamos um só batismo para remissão dos pecados e esperamos a
              ressurreição dos mortos e, cremos na vida eterna do mundo
              vindouro.
            </p>
            <p>
              • Cremos e declaramos que a Bíblia é a Palavra de Deus, inspirada,
              viva, inerrante, e infalível! Que é a única regra de fé e prática
              para o verdadeiro crente. Como Palavra inspirada de Deus, cremos
              que toda a Escritura é “útil para o ensino, para a repreensão,
              para a correção, para a educação na justiça, a fim de que o homem
              de Deus seja perfeito e perfeitamente habilitado para toda boa
              obra” (2ª Timóteo 3:16-17).
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EmQueCremos;
