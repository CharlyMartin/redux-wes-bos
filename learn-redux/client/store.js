// Packages
import { createStore } from "redux";

// Data
import comments from "./data/comments";
import posts from "./data/posts";

// Reducers
import { rootReducer } from "./reducers/index";

const defaultState = {
  comments,
  posts
}

// By combining the store, everytime an action is dispatch
// every single reducer function is going to run.
// Then it's up to each recuder to do something with the action or not,
// as in, if the action type matches, then it will do something.
const store = createStore(rootReducer, defaultState);

export { store };