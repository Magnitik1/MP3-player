import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./playlists.css";
import mydel from "../../../../pics/bin.svg";
import Listen from "./Listen/Listen";
const Playlists = (props) => {
  const [listVisibility, SetlistVisibility] = useState(true);
  const myAltsrc = () => {
    <img
      src="https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg"
      className="favbg"
      alt="d&d"
    />;
  };
  const Remove = () => {
    if (props.id == 1) return;
    SetlistVisibility((visible) => !visible);
    for (
      let i = props.allplaylists.findIndex((e) => e.id === props.id);
      i < props.allplaylists.length - 1;
      i++
    ) {
      props.allplaylists[i] = props.allplaylists[i + 1];
    }
    props.allplaylists.pop();
  };

  return (
    <div className="Playlists">
      {listVisibility && (
        <div style={{width:"100%"}}>
          <Link to={"/Listen#"+props.name} style={{ textDecoration: "none" }} className="mygreen">
            <li>
              <img src={props.picture} className="favbg" alt={myAltsrc} />
              <a className={props.theme[props.theme[0]]+" ptext"} style={{background:"rgba(0,0,0,0)"}}>
                &nbsp;&nbsp;&nbsp;{props.name}
              </a>
            </li>
          </Link>
          <Link className="delbutton">
            <img onClick={Remove} src={mydel} alt="Delete" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Playlists;
