import React from "react";
import { useParams } from "react-router-dom";
import TemplateAnotation from "../../../components/template-page-anotation";
import { requestArticles } from "../../../services/requests";
import useResource from "../../../components/useResource";

function Artigo() {
  const { id } = useParams();
  const request = () => requestArticles.getById({ id });
  const articles = useResource(request, [id]);
  return <TemplateAnotation data={articles} Video={null} />;
}

export default Artigo;
