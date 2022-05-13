import React from "react";
import "../CSS/Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "../StateProvider";

const Header = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <nav className="header__nav">
        <div className="header__left">
          <Avatar
            className="header__avatar"
            alt={user?.displayName} //{user?.displayName}
            src={user?.photoURL} //{user?.photoURL}
          />
          <AccessTimeIcon />
        </div>
        <div className="header__search">
          <SearchIcon />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search # channels"
          />
        </div>
        <div className="header__right">
          <HelpOutlineIcon />
        </div>
      </nav>
    </div>
  );
};

export default Header;
