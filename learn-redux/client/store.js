// Packages
import { createStore } from "redux";

// Data
import comments from "./data/comments";
import posts from "./data/posts";

// Reducers
import rootReducer from "./reducers/index";

const defaultState = {
  comments,
  posts
}

const store = createStore(rootReducer, defaultState);

export { store };