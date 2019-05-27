// The Redux store only accepts one reducers,
// but its's a good practice to create several reducers for each type of state
// so that's why we conbine all of our reducers before passing them to the store.

// Packages
import { combineReducers } from "redux";

// Reducers
import { commentsReducer } from "./comments";
import { postsReducer } from "./posts";

const rootReducer = combineReducers({
  comments: commentsReducer,
  posts: postsReducer
})

export { rootReducer };