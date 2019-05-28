import React from "react";
import { Link } from "react-router-dom"

function Card(props) {
  const link = `/view/${props.post.code}`;

  const commentNumber = props.comments[props.post.code] ? props.comments[props.post.code].length : 0;

  return (
    <figure className="grid-figure">
      <div className="div-photo-wrap">
        <Link to={link}>
          <img src={props.post.display_src} alt={props.post.caption}/>
        </Link>

        <figcaption>
          <p>{props.post.caption}</p>
          <div className="control-buttons">
            <button className="likes">
              &hearts; {props.post.likes}
            </button>
            <Link className='button' to={link}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {commentNumber}
              </span>
            </Link>
          </div>
        </figcaption>
      </div>
    </figure>
  )
};

export { Card }