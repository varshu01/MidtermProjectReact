import React, { useState } from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  function myfunction() {
    console.log("CLICKED");
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button style={{ backgroundColor: "#dbc6ec" }} onClick={handleClick}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5678/5678542.png"
          height="25px"
          width="25px"
          onClick={myfunction}
        />
      </button>
    </div>
  );
}

export default Note;
