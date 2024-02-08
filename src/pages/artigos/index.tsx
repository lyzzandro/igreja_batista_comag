import React from "react";
import useResources from "../../components/useResource";
import TemplateGrid from "../../components/template-grid-page";
import Card from "../../components/card";
import { getAllArticles } from "../../services/crud/article";

function Artigos() {
  const articles = useResources(getAllArticles);

  return (
    <TemplateGrid
      SectionGrid={Card}
      listData={articles}
      singleName="artigo"
      title="Artigos"
    />
  );
}

export default Artigos;
