import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

function MessageSender() {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageURL,
    });
    setImageURL("");
    setInput("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            className="messageSender__input"
            placeholder={`What's on your mind?,${user.displayName}`}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <input
            placeholder="image URL (optional) "
            value={imageURL}
            onChange={(e) => {
              setImageURL(e.target.value);
            }}
          />
          <button onClick={handleSubmit} type="submit">
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3> Photo / video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3> Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
