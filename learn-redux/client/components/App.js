import { bindActionCreators } from "redux";
// https://react-redux.js.org/api/connect
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import { Main } from "./Main";

// The first argument to mapStateToProps() is the entire Redux store state
// the value returned by a call to store.getState())
// The mapStateToProps function should always be written with at least state passed in.
function mapStatesToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
  // It returns a plain object that contains the data the component needs:
  // Each field in the object will become a prop for your actual component
  // The values in the fields will be used to determine if your component needs to re-render

}

function mapDispatchToProps(dispath) {
  return bindActionCreators(actionCreators, dispath)
}

// The connect() function connects a React component to a Redux store.
// It provides its connected component with the pieces of the data it needs from the store
// and the functions it can use to dispatch actions to the store.
// It does not modify the component passed to it;
// instead, it returns a new, connected component that wraps the component you passed in.
const wrapWithConnect = connect(mapStatesToProps, mapDispatchToProps);
const ConnectedMain = wrapWithConnect(Main);

export { ConnectedMain }