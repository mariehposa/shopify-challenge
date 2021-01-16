import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import moviesReducer from '../redux/movies/reducer'


const allReducers = combineReducers({
    movies: moviesReducer
  })
  
  const store = createStore(
    allReducers,
    {},
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  )
  

  export default store