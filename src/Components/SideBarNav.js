import React, { useEffect, useState } from "react";
import "../CSS/Sidebarnav.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SideBarOptions from "./SideBarOptions";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "../firebase";
import { useStateValue } from "../StateProvider";

const SideBarNav = () => {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  return (
    <div className="sidebarnav">
      <div className="sidebar__header">
        <div className="sidebar__user-info">
          <h2 className="username">SLACK Workspace</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>

      <SideBarOptions Icon={InsertCommentIcon} title="Threads" />
      <SideBarOptions Icon={InboxIcon} title="Mentions & reactions" />
      <SideBarOptions Icon={DraftsIcon} title="Saved items" />
      <SideBarOptions Icon={BookmarkBorderIcon} title="Channel browser" />
      <SideBarOptions Icon={PeopleAltIcon} title="People & user groups" />
      <SideBarOptions Icon={AppsIcon} title="Apps" />
      <SideBarOptions Icon={FileCopyIcon} title="File browser" />
      <SideBarOptions Icon={ExpandLessIcon} title="Show less" />

      <hr />

      <SideBarOptions Icon={ExpandMoreIcon} title="Channels" />

      <hr />

      <SideBarOptions Icon={AddIcon} addChannelOption title="Add Channels" />
      {channels.map((channel) => {
        return <SideBarOptions title={channel.name} id={channel.id} />;
      })}
    </div>
  );
};

export default SideBarNav;
