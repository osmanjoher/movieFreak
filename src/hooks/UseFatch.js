import { useEffect, useState } from "react";

export const useFatch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    async function featchMovie() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    featchMovie();
  }, [url]);
  return { data };
};
