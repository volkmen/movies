import React from "react";
import { MovieBoxItem } from "../MovieBoxItem/MovieBoxItem";
import './MoviesBoxes.scss';

const MoviesBoxes = ({ movies }) => {
    return (
        <div className="movies-boxes">
            {
                movies.map(movie => <MovieBoxItem movie={movie} key={movie.id} />)
            }
        </div>
    );
};

export default MoviesBoxes;