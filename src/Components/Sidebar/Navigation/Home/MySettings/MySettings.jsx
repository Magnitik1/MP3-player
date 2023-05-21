import React, { useState } from "react";
import "./mySettings.css";
import back from "../../../../pics/arrowleft.svg";
import { Link } from "react-router-dom";

function MySettings(props) {
  const [mytheme, setTheme] = useState(props.theme[props.theme[0]]+" Theme");
  return (
    <div className="MySettings">
      <div className={props.theme[props.theme[0]]+" Theme"}>
        <Link to="/">
          <img src={back} alt="back" className="back" />
        </Link>
        <a className={"text"}>
          <span className="mid1">&nbsp;&nbsp;Settings</span>
        </a>
        <button
          onClick={() => {
            props.theme[0]++;
            if(props.theme[0]>=props.theme.length)props.theme[0]=1;
            setTheme(props.theme[props.theme[0]]+" Theme");
          }}
          className={"themeButton "+props.theme[props.theme[0]>=props.theme.length-1?1:props.theme[0]+1]}>
          {props.theme[props.theme[0]>=props.theme.length-1?1:props.theme[0]+1]}
        </button>
      </div>
    </div>
  );
}

export default MySettings;
