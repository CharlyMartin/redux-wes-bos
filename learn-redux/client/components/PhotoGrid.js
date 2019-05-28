import React from "react";
import { Card } from "./Card";

function PhotoGrid(props) {
  const renderPhotos = (
    props.posts.map((post, i) => <Card key={i} i={i} post={post} {...props}/>)
  )

  return (
    <div className="photo-grid">
      {renderPhotos}
    </div>
  )
}

export { PhotoGrid }