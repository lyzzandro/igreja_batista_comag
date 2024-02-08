import { getAllDevotionals } from "../../services/crud/devotional";
import useResources from "../../components/useResource";
import TemplateGrid from "../../components/template-grid-page";
import Card from "../../components/card";
import "./style.css";

function Devocionais() {
  const devocional = useResources(getAllDevotionals);

  return (
    <TemplateGrid
      title="Devocionais"
      singleName="devocional"
      listData={devocional}
      SectionGrid={Card}
    />
  );
}

export default Devocionais;
