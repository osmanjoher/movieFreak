import React from "react";
import { Route, Routes } from "react-router-dom";
import { MovieDetails } from "../pages/MovieDetails";
import { MovieList } from "../pages/MovieList";
import { PageNotFound } from "../pages/PageNotFound";
import { Search } from "../pages/Search";

const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-600">
      <Routes>
        <Route
          path=""
          element={<MovieList apiPath="movie/now_playing" title="Home" />}
        />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route
          path="movies/popular"
          element={<MovieList apiPath="movie/popular" title="popular" />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route
          path="movies/top"
          element={<MovieList apiPath="movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList apiPath="movie/upcoming" title="Upcoming" />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
