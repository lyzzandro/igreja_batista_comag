import "./style.css";
import "../../index.css";

import label from "../../../public/label-igreja.svg";

function HistoriaDaIgreja() {
  return (
    <div className="historia-da-igreja">
      <div className="container">
        <div className="content">
          <img src={label} alt="Imagem da igreja" />
          <h4 className="bold">História da Igreja</h4>
          <p>
            Em 14 de setembro de 2005 a Igreja Batista do Bairro André Gadelha
            era organizada. Localizada em um pequeno bairro da cidade de Sousa –
            Paraíba. Dois irmãos, sendo Joselito Garrido Fernandes e Rostand
            Antunes da Primeira Igreja Batista de Sousa que faziam parte da
            liderança da União dos Homens Batistas foram aplicar um estudo
            bíblico a uma moradora local chama Adriana, e desde estudo muitos
            outros foram feitos, a ponto de formar um pequeno grupo que começou
            a se reunir uma vez por semana em baixo de uma arvore para louvar e
            ouvir do evangelho.
          </p>
          <p>
            Tudo começou apenas com uma pessoa que em um ano já eram 21 pessoas,
            logo viram a necessidade de alugar um peno prédio para que pudessem
            congregar em segurança e conforto, a igreja foi crescendo e outros
            irmãos viera ajudar como o hoje Pastor Thiago Henrique e sua esposa
            Carol, os irmãos Wilson Morais, Marcos Antonio, Lucelio Silva e sua
            esposa Vânia e muitos outros. Em 2010 pela graça de Deus,
            conquistamos o terreno onde hoje funciona a nossa Sede, na Rua
            Adilmar de Paiva Gadelha n°01. Atualmente, a Igreja Batista Comag
            atua com o modelo (Igreja física e digital) alcançando membros de
            outros lugares do Brasil e do mundo que cultuam conosco e participam
            das nossas atividades pela internet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HistoriaDaIgreja;
