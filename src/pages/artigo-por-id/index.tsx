import { Render } from "@9gustin/react-notion-render";
import "@9gustin/react-notion-render/dist/index.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getArticle } from "../../services/crud/article";
import { formatDate } from "../../services/date";

function Artigo() {
  const [devotional, setDevotional] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function main() {
      const response = await getArticle({ id });
      setDevotional(response);
    }
    main();
  }, [id]);

  return (
    <div className="main artigo-id">
      <div className="container">
        <div className="content">
          <span className="title-section">
            <h4>{devotional?.name}</h4>
            <p>
              Por <strong>{devotional?.auth} - </strong>
              em {formatDate(devotional?.date)}
            </p>
          </span>
          <Render useStyles blocks={devotional?.content} />
        </div>
      </div>
    </div>
  );
}

export default Artigo;
