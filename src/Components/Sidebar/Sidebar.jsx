import React from "react";
import "./sidebar.css";
import Navigation from "./Navigation/Navigation";
import SongNow from "./SongNow/SongNow";

function Sidebar(props) {
  return (
    <div className="Sidebar">
      <div className="rect">
        <Navigation/>
        <SongNow songpic='https://m.media-amazon.com/images/I/51MJTfOLIrL.jpg' getsong={props.getsong} setsong={props.setsong}/>
      </div>
    </div>
  );
}

export default Sidebar;
