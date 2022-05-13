import React from "react";
import "../CSS/Messages.css";

const Messages = ({ message, timestamp, user, userImage }) => {
  return (
    <div className="messages">
      <img src={userImage} alt="user" />
      <div className="message__Info">
        <h4>
          {user}{" "}
          <span className="message__timestamp">
            {timestamp?.toDate().toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Messages;
