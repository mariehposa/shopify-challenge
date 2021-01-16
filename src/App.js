import { Route } from "react-router-dom";
import MovieList from './components/movieList';
import NominationList from './components/nominationList';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Route path={["/", "/nomination_list"]} component={NominationList} />
      <Route exact path={["/", "/movies"]} component={MovieList} />
    </div>
  );
}

export default App;
