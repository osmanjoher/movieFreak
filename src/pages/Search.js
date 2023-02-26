import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import { useFatch } from "../hooks/UseFatch";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFatch(apiPath, queryTerm);
  useEffect(() => {
    document.title = `search for ${queryTerm}|Movie Freak`;
  });

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No result found '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
