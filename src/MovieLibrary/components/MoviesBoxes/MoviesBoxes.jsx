import React, { useCallback, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import MovieBoxItem from "../MovieBoxItem/MovieBoxItem";
import SortDropdown from "../SortDropdown/SortDropdown";
import { SORTING_TYPES } from "../../constants/movies";
import './MoviesBoxes.scss';

const sortingOptions = [
    {
        value: 'ascend',
        label: 'A - Z',
        type: SORTING_TYPES.ASCEND
    },
    {
        value: 'descend',
        label: 'Z - A',
        type: SORTING_TYPES.DESCEND
    },
    {
        value: 'rate',
        label: 'rate',
        type: SORTING_TYPES.RATE
    },
    {
        value: 'default',
        label: 'Select sorting type',
        type: SORTING_TYPES.DEFAULT
    }];

const getOptionByValue = (val) => {
    return sortingOptions.find(({ value }) => value === val)
};

const MoviesBoxes = ({ movies }) => {
    const [selectedOption, setSelectedOption] = useState(getOptionByValue('default'));
    const [sortedMovies, setSortedMovies] = useState(movies);

    const onSelectOptions = useCallback((e) => {
        const selectedValue = e.target.value;
        setSelectedOption(getOptionByValue(selectedValue));
    }, []);

    const getSortedMoviesByType = useCallback((type) => {
        return movies.map(movie => ({...movie})).sort((firstMovie, secondMovie) => {
            switch (type) {
                case SORTING_TYPES.ASCEND: {
                    return firstMovie.title > secondMovie.title ? 1 : -1
                }
                case SORTING_TYPES.DESCEND: {
                    return secondMovie.title > firstMovie.title ? 1 : -1
                }
                case SORTING_TYPES.RATE: {
                    return secondMovie.rate - firstMovie.rate
                }
                default: return false
            }
        })
    }, [movies]);

    useEffect(() => {
        const sortedMoviesByValue = getSortedMoviesByType(selectedOption.value);
        setSortedMovies(sortedMoviesByValue);
        // eslint-disable-next-line
    }, [movies, selectedOption]);

    return (
        <div className="container fadeIn">
            <div className="movies-sort-dropdown">
                <SortDropdown
                    options={sortingOptions}
                    onSelectItem={onSelectOptions}
                    defaultValue="default"
                />
            </div>
            <div className="movies-boxes">
                {
                    sortedMovies.map(movie => <MovieBoxItem movie={movie} key={movie.id} />)
                }
            </div>
        </div>
    );
};

MoviesBoxes.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
};

MoviesBoxes.defaultProps = {
    movies: []
};

export default React.memo(MoviesBoxes);