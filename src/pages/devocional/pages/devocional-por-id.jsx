import { useParams } from "react-router-dom";
import { requestDevotionals } from "../../../services/requests";
import TemplateAnotation from "../../../components/template-page-anotation";
import Video from "../components/Video";
import useResource from "../../../components/useResource";

function Devocional() {
  const { id } = useParams();
  const request = () => requestDevotionals.getById({ id });
  const devotional = useResource(request, [id]);
  return <TemplateAnotation data={devotional} Video={Video} />;
}

export default Devocional;
