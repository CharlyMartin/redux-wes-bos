function postsReducer(state = [], action) {
  console.log("posts are being modified");
  console.log(state, action)
  switch(action.type) {
    case 'INCREMENT_LIKES':
      const copy = [...state];
      copy[action.id].likes += 1;
      console.log(copy);
      return copy;
      // return [
      //   ...state.slice(0, action.id), // Everything before the action.id
      //   {...state[action.id], likes: state[action.id].likes + 1}, // the one matching the action.id
      //   ...state.slice(action.id + 1) // Everything after the action.id
      // ]
    default:
      return state;
  }
}

export { postsReducer };