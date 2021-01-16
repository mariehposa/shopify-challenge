import { Route } from "react-router-dom";
import MovieList from './components/movieList';
import NominationList from './components/nominationList';
import Header from './components/Header';
import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import * as reducers from './redux/reducer';

const totalReducer = combineReducers({
  aState: reducers.countReducer
})

const store = createStore(
  totalReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Route path={["/", "/nomination_list"]} component={NominationList} />
        <Route exact path={["/", "/movies"]} component={MovieList} />
      </div>
    </Provider>
  );
}

export default App;
