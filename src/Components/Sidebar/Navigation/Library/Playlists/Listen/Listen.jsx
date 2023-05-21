import React, { useState } from "react";
import "./listen.css";
import { Link } from "react-router-dom";
import back from "../../../../../pics/arrowleft.svg";
import {getplaylist, setplaylist} from "../../../../../redux/allplaylists.js";

const Listen = (props) => {
  let link = window.location.href;
  link = link.slice(link.indexOf("#") + 1);
  while (link.includes("%20")) {
    link = link.replace("%20", " ");
  }
  let playlist;
  if (props.allplaylists.find((e) => e.name === link)) {
    playlist = props.allplaylists.find((e) => e.name === link);
    setplaylist(playlist.songs, playlist.id)
  } else {
    playlist = props.mainplaylists.find((e) => e.name === link);
    setplaylist(playlist.songs, playlist.id)
  }  
  let prap = playlist.songs[0]===-1
  let qw = prap?props.AllSongs:playlist.songs;
  let str = qw.map((el) => {
      let e = prap?el:props.AllSongs[el];
      return (
        <div className="choosesong" onClick={()=>{props.setsong(e.id)}}>
          {e.name} - {e.author}
          <br />
          <img src={e.url} alt="pic" style={{borderRadius:"10px", height:"80px", width:"80px" }} />
          <br />
          <br />
        </div>
      );
    });

  return (
    <div className={props.theme[props.theme[0]] + " Theme Listen"}>
      <Link to="/">
        <img src={back} alt="back" className="back" />
      </Link>
      <br />
      <div>{str}</div>
    </div>
  );
};

export default Listen;
