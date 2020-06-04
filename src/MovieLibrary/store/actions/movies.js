import { MOVIES_TYPES } from "../actionTypes/movies";
import { getMovies } from "../../api/BaseAPI";
import toCamelCase from "../../utils/toCamelCase";

const getMoviesFetch = () => ({
  type: MOVIES_TYPES.GET_MOVIES_FETCH,
});

const getMoviesSuccess = (payload) => ({
  type: MOVIES_TYPES.GET_MOVIES_SUCCESS,
  payload,
});

const getMoviesError = (payload) => ({
  type: MOVIES_TYPES.GET_MOVIES_ERROR,
  payload,
});

export const fetchTopRatedMovies = ((page) => () => (dispatch) => {
  dispatch(getMoviesFetch());

  return getMovies(page++)
    .then((data) => dispatch(getMoviesSuccess(toCamelCase(data.results))))
    .catch((e) => dispatch(getMoviesError(e)));
})(1);
