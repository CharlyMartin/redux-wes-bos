// Packages
import React from "react";
import { Switch, Route, Link } from "react-router-dom";

// Components
import { PhotoGrid } from "./PhotoGrid";
import { Single } from "./Single";

function Main(props) {
  return (
    <div>
      <h1>
        <Link to="/">Reduxstagram</Link>
      </h1>

      <Switch>
        <Route path="/" exact component={() => <PhotoGrid {...props}/>} />
        <Route path="/view/:id" component={Single} />
      </Switch>
    </div>
  )
}

export { Main }