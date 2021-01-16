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
        {/* <Route path={["/", "/nomination_list"]} component={NominationList} /> */}
        <Route exact path={["/", "/movies"]} component={MovieList} />
      </div>
    </Provider>
  );
}

export default App;
