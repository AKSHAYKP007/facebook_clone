import React from "react";
import { Avatar } from "@material-ui/core";
import "./Story.css";

function Story({ img, profile, title }) {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className="story">
      <Avatar className="story__avatar" src={profile} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
