import "./App.css";
import Header from "./header";
import SectionCultos from "./section-cultos";
import SectionDizimos from "./section-dizimos";
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
    </>
  );
}

export default App;
