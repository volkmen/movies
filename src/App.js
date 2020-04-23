import React, { Component } from 'react'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import moviesReducer from './MovieLibrary/store/reducers/movies';
import MovieLibrary from './MovieLibrary';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
    movies: moviesReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MovieLibrary />
      </Provider>
    )
  }
}

export default App
