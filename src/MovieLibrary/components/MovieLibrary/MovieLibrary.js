import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchTopRatedMovies} from '../../store/actions';
import logo from '../../assets/logo.svg'
import './MovieLibrary.css'
import {getMovies} from '../../store/selectors'
import MoviesBoxes from "./../MoviesBoxes/MoviesBoxes";
import toCamelCase from "../../utils/toCamelCase";

class MovieLibrary extends Component {

  static propTypes = {

  };

  componentDidMount() {
    const { fetchTopRatedMovies } = this.props;
    fetchTopRatedMovies()
  };

  render() {
    const {movies} = this.props;

    return (
      <div className="MovieLibrary">
        <header className="ML-header">
          <img src={logo} className="ML-logo" alt="logo" />
          <h1 className="ML-title">Movies</h1>
        </header>
        <div className="ML-intro">
          { movies.length && <MoviesBoxes movies={toCamelCase(movies)}/> }
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  movies: getMovies(state)
}), {fetchTopRatedMovies})(MovieLibrary)
