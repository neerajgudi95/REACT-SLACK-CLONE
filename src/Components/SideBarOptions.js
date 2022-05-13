import React from "react";
import { useHistory } from "react-router-dom";
import "../CSS/Sidebaroption.css";
import db from "../firebase";

const SideBarOptions = ({ Icon, title, id, addChannelOption }) => {
  const history = useHistory();
  const selectChannel = () => {
    id ? history.push(`/room/${id}`) : history.push(title);
  };

  const addChannel = () => {
    const channelName = prompt("Please enter channel name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
};

export default SideBarOptions;