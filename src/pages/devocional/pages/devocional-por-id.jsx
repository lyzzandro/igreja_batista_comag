import { Render } from "@9gustin/react-notion-render";
import "@9gustin/react-notion-render/dist/index.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { requestDevotionals } from "../../../services/requests";
import Video from "../components/Video";

function Devocional() {
  const [devotional, setDevotional] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function main() {
      const response = await requestDevotionals.getById({ id });
      setDevotional(response);
    }
    main();
  }, [id]);

  return (
    <div className="main">
      <div className="container">
        <div className="content">
          <div className="title-section">
            <h4>{devotional?.name}</h4>
            <p>
              Por <span className="bold">{devotional?.auth}</span>
            </p>
            {devotional?.vídeo && <Video url={devotional?.vídeo} />}
          </div>
          <Render useStyles blocks={devotional?.content} />
        </div>
      </div>
    </div>
  );
}

export default Devocional;
