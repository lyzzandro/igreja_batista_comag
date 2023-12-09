import "./App.css";
import Header from "./header";
import SectionCultos from "./section-cultos";
import SectionDizimos from "./section-dizimos";
import SectionFaleConosco from "./section-fale-conosco";
import SectionHero from "./section-hero";
import SectionProgramacao from "./section-programacao";

function App() {
  return (
    <>
      <Header></Header>
      <SectionHero></SectionHero>
      <SectionProgramacao></SectionProgramacao>
      <SectionDizimos></SectionDizimos>
      <SectionCultos></SectionCultos>
      <SectionFaleConosco></SectionFaleConosco>
    </>
  );
}

export default App;
