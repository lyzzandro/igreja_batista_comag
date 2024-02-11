import { useEffect, useState } from "react";

function useResource(callbackAPI, monitoring = []) {
  const [resource, setResource] = useState([]);

  useEffect(() => {
    async function main() {
      const response = await callbackAPI();
      setResource(response);
    }
    main();
  }, monitoring);

  return resource;
}

export default useResource;
