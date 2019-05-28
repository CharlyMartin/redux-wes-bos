import React from "react";
import { Card } from "./Card";

function PhotoGrid(props) {
  return (
    <div className="photo-grid">
      {props.posts.map((post, i) => <Card />)}
    </div>
  )
}

export { PhotoGrid }