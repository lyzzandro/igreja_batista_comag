import "./App.css";
import Header from "./header";
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
    </>
  );
}

export default App;
