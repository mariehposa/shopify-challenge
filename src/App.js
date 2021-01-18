import React, { useEffect, useRef, useState } from "react";
import { Route } from "react-router-dom";
import MovieList from "./components/movieList";
import NominationList from "./components/nominationList";
import Header from "./components/Header";
import { Provider } from "react-redux";
import "./styles/header.scss";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./store";

function App() {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<MovieList />} persistor={persistor}>
        <div>
          <div
            className={`sticky-wrapper${isSticky ? " sticky" : ""}`}
            ref={ref}
          >
            <Header />
          </div>
          <Route exact path={["/", "/movies"]} component={MovieList} />
          <Route path="/nomination_list" component={NominationList} />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
