import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchTopRatedMovies } from "../../store/actions/movies";
import logo from "../../assets/logo.svg";
import "./MovieLibrary.css";
import MoviesBoxes from "./../MoviesBoxes/MoviesBoxes";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

const INITIAL_PAGES_AMOUNT = 3;

const MovieLibrary = ({ fetchTopRatedMovies, movies, isLoading }) => {
  const bottomBoundaryRef = useRef(null);

  useEffect(() => {
    for (let i = 0; i < INITIAL_PAGES_AMOUNT - 1; i++) {
      fetchTopRatedMovies();
    }
    // eslint-disable-next-line
  }, []);

  useInfiniteScroll({
    isLoading,
    bottomBoundaryRef,
    pagerDispatch: fetchTopRatedMovies,
  });

  return (
    <div className="MovieLibrary">
      <header className="ML-header">
        <img src={logo} className="ML-logo" alt="logo" />
        <h1 className="ML-title">Movies</h1>
      </header>
      <div className="ML-intro">
        {isLoading && <LoadingSpinner />}
        {movies.length && <MoviesBoxes movies={movies} />}
        <div id="page-bottom-boundary" ref={bottomBoundaryRef} />
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    movies: state.movies.data,
    isLoading: state.movies.loading,
    currentPage: state.movies.pages,
  }),
  { fetchTopRatedMovies }
)(MovieLibrary);
