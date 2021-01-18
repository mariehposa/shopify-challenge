import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "../redux/movies/reducer";
import nominationsReducer from "../redux/nominations/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const allReducers = combineReducers({
  movies: moviesReducer,
  nominations: nominationsReducer,
});

const pReducer = persistReducer(persistConfig, allReducers);

export const store = createStore(
  pReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistor = persistStore(store);
