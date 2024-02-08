import { useEffect, useState } from "react";

function useResource(callbackAPI) {
  const [resource, setResource] = useState([]);

  useEffect(() => {
    async function main() {
      const response = await callbackAPI();
      setResource(response);
    }
    main();
  }, []);

  return resource;
}

export default useResource;
