import React from "react";

export default function Blog(props) {
  return (
    <div className="blog-card">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img
        className="blog-img"
        src={`https:${props.image}`}
        alt="{props.title}"
      />
    </div>
  );
}
