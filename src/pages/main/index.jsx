import SectionCultos from "./components/section-cultos";
import SectionDizimos from "./components/section-dizimos";
import SectionFaleConosco from "../../components/section-fale-conosco";
import SectionHero from "./components/section-hero";
import SectionLocalizacao from "../../components/section-localizacao";
import SectionProgramacao from "./components/section-programacao";

function Main() {
  return (
    <div>
      <SectionHero />
      <SectionCultos />
      <SectionProgramacao />
      <SectionDizimos />
      <SectionFaleConosco />
      <SectionLocalizacao />
    </div>
  );
}

export default Main;
