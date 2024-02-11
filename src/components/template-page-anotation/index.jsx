import { Render } from "@9gustin/react-notion-render";
import "@9gustin/react-notion-render/dist/index.css";
import { useState } from "react";
import Loading from "../loading";
import api from "../../api";
import { formatDate } from "../../services/date";

function TemplateAnotation({ data, Video }) {
  const [loading, setLoading] = useState(true);

  api.interceptors.response.use((response) => {
    setLoading(false);
    return response;
  }, null);

  function ComponentRender() {
    return (
      <div className="content">
        <div className="title-section">
          <h4>{data?.name}</h4>
          <p>
            Por <span className="bold">{data?.auth}</span> - em{" "}
            {formatDate(data?.date)}
          </p>
          {data?.video && <Video url={data?.video} />}
        </div>
        <Render useStyles blocks={data?.content} />
      </div>
    );
  }
  return (
    <div className="main">
      <div className="container">
        {loading ? <Loading /> : <ComponentRender />}
      </div>
    </div>
  );
}

export default TemplateAnotation;
