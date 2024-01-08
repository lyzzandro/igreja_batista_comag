import "./App.css";
import SectionFooter from "./footer";
import Header from "./header";
import SectionCultos from "./section-cultos";
import SectionDizimos from "./section-dizimos";
import SectionFaleConosco from "./section-fale-conosco";
import SectionHero from "./section-hero";
import SectionLocalizacao from "./section-localizacao";
import SectionProgramacao from "./section-programacao";

function App() {
  return (
    <>
      <Header></Header>
      <SectionHero></SectionHero>
      <SectionCultos></SectionCultos>
      <SectionProgramacao></SectionProgramacao>
      <SectionDizimos></SectionDizimos>
      <SectionFaleConosco></SectionFaleConosco>
      <SectionLocalizacao></SectionLocalizacao>
      <SectionFooter></SectionFooter>
    </>
  );
}

export default App;
