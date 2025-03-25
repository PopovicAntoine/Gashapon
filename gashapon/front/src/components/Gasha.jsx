import { useEffect, useState } from "react";

const restEndpoint = `${import.meta.env.VITE_API_URL}/cards/65`;

const callRestApi = async () => {
    const response = await fetch(restEndpoint);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return JSON.stringify(jsonResponse);
};

export default function Gasha() {
  const [apiResponse, setApiResponse] = useState("*** now loading ***");

  useEffect(() => {
      callRestApi().then(
          result => setApiResponse(result));
  },[]);

  return(
      <div>
          <h1>React App</h1>
          <p>{apiResponse}</p>
      </div>
  );
};

