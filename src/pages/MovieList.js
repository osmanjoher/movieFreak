import React, { useEffect } from "react";
import Card from "../components/Card";
import { useFatch } from "../hooks/UseFatch";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFatch(apiPath);

  useEffect(() => {
    document.title = `${title}|Movie Freak`;
  });

  return (
    <main>
      <div className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap queryScreen:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
};
