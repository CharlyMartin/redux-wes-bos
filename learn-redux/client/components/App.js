import { bindActionCreators } from "redux";
// https://react-redux.js.org/api/connect
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import { Main } from "./Main";

function mapStatesToProps(state) {
  console.log(state);
  return {
    posts: state.posts,
    comments: state.comments
  }

}

function mapDispatchToProps(dispath) {
  console.log(dispath);
  return bindActionCreators(actionCreators, dispatchEvent)
}

// The connect() function connects a React component to a Redux store.
// It provides its connected component with the pieces of the data it needs from the store
// and the functions it can use to dispatch actions to the store.
// It does not modify the component passed to it;
// instead, it returns a new, connected component that wraps the component you passed in.
const wrapper = connect(mapStatesToProps, mapDispatchToProps);
const ConnectedMain = wrapper(Main);

export { ConnectedMain }