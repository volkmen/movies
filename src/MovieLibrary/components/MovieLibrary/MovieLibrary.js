import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchTopRatedMovies} from '../../store/actions/movies';
import logo from '../../assets/logo.svg'
import './MovieLibrary.css'
import MoviesBoxes from "./../MoviesBoxes/MoviesBoxes";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

class MovieLibrary extends Component {

  static propTypes = {

  };

  componentDidMount() {
    const { fetchTopRatedMovies } = this.props;
    fetchTopRatedMovies(1);
    fetchTopRatedMovies(2);
    fetchTopRatedMovies(3);
  };

  render() {
    const { movies, isLoading } = this.props;

    return (
        <div className="MovieLibrary">
            <header className="ML-header">
              <img src={logo} className="ML-logo" alt="logo" />
              <h1 className="ML-title">Movies</h1>
            </header>
            <div className="ML-intro">
                {isLoading &&  <LoadingSpinner />}
                { movies.length && <MoviesBoxes movies={movies}/> }
            </div>
        </div>
    );
  }
}

export default connect((state) => ({
    movies: state.movies.data,
    isLoading: state.movies.loading,
    currentPage: state.movies.pages,
}), {fetchTopRatedMovies})(MovieLibrary)
