import { requestDevotionals } from "../../services/requests";
import TemplateGrid from "../../components/template-grid-page";
import useResources from "../../components/useResource";
import Card from "../../components/card";
import "./style.css";

function Devocionais() {
  const devocional = useResources(requestDevotionals.getAll);

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
