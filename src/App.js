import { Route } from "react-router-dom";
import MovieList from './components/movieList';
import NominationList from './components/nominationList';

function App() {
  return (
    <div>
      <Route exact path="/" component={MovieList} />
      <Route path="/nomination_list" component={NominationList} />
    </div>
  );
}

export default App;
