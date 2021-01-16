import { Route } from "react-router-dom";
import MovieList from "./components/movieList";
import NominationList from "./components/nominationList";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/header.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Route exact path={["/", "/movies"]} component={MovieList} />
        <Route path="/nomination_list" component={NominationList} />
      </div>
    </Provider>
  );
}

export default App;
