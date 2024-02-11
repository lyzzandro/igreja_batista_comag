import React from "react";

import TemplateGrid from "../../components/template-grid-page";
import useResources from "../../components/useResource";
import Card from "../../components/card";

import { requestArticles } from "../../services/requests";

function Artigos() {
  const articles = useResources(requestArticles.getAll);

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
