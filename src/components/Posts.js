import React, { useState } from "react";
import axios from "axios";

export default function Posts(props) {
  let mappedPosts = props.posts.map(p => (
    <div key={p.id}>
      <p>{p.title}</p>
      <img style={{ width: "200px", height: "200px" }} src={p.picture} />
      <p>{p.post}</p>
      <button onClick={() => props.delete(p.id)}>X</button>
    </div>
  ));
  return <div>{mappedPosts}</div>;
}
