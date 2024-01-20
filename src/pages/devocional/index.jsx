import { Render } from "@9gustin/react-notion-render";
import { useEffect, useState } from "react";
import { getDevotional } from "../../services/crud/devotional";
import { useParams } from "react-router-dom";
import Video from "./components/Video"

function Devocional() {
  const [devotional, setDevotional] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function main() {
      const response = await getDevotional({ id });
      setDevotional(response);
    }
    main();
  }, [id]);

  return (
    <div className="main">
      <div className="container">
        <div className="content">
          <h4>{devotional?.name}</h4>
          <p>Por <span className="bold">{devotional?.auth}</span></p>
          {devotional?.vídeo && <Video url={devotional?.vídeo} />}
          <Render blocks={devotional?.content} />
        </div>
      </div>
    </div>
  );
}

export default Devocional;
