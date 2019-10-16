import React from "react";


export default function Form(props) {
  let { input, imageUrl, post } = props.appState;
  return (
    <div>
      <input
        name="input"
        value={input}
        onChange={e => props.handleChange(e)}
        placeholder="add a title"
      />
      <input
      placeholder='add an image'
        name="imageUrl"
        value={imageUrl}
        onChange={e => props.handleChange(e)}
      />
      <input
      placeholder='add a comment'
        name="post"
        value={post}
        onChange={e => props.handleChange(e)}
      />
      <div className="example-post">
        <p>{input}</p>
        <img
          style={{ width: "200px", height: "200px" }}
          src={imageUrl}
          alt=""
        />
        <p>{post}</p>
      </div>
    </div>
  );
}
