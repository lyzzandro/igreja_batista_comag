import Header from "../../components/header";
import SectionCultos from "./components/section-cultos";
import SectionDizimos from "./components/section-dizimos";
import SectionFaleConosco from "../../components/section-fale-conosco";
import SectionHero from "./components/section-hero";
import SectionLocalizacao from "../../components/section-localizacao";
import SectionProgramacao from "./components/section-programacao";
import Footer from "../../components/footer";

function Main() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionCultos />
      <SectionProgramacao />
      <SectionDizimos />
      <SectionFaleConosco />
      <SectionLocalizacao />
      <Footer />
    </>
  );
}

export default Main;
