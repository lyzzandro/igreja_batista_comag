import { Render } from "@9gustin/react-notion-render";
import { useEffect, useState } from "react";
import { getDevotional } from "../../services/getDataInApi";
import { useParams } from "react-router-dom";
import "./style.css";

function Devocional() {
  const [devotional, setDevotional] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function main() {
      const response = await getDevotional({ id });
      console.log(response);
      setDevotional(response);
    }
    main();
  }, []);

  return (
    <div className="devocional">
      <Render blocks={devotional?.content} />
    </div>
  );
}

export default Devocional;
