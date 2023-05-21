import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import settingsPic from "../../../pics/mysettings.svg";
import acoustic from "../../../pics/acoustic.jpg";
import electro from "../../../pics/electro.webp";
import romantic from "../../../pics/romantic.png";
import hiphop from "../../../pics/hiphop.jpg";
import music from "../../../pics/music.webp";
import rock from "../../../pics/rock.jpg";
import classic from "../../../pics/leclassic.jpg";
import pop from "../../../pics/pop.jpg";
import queen from "../../../pics/queen.webp";
import nickelback from "../../../pics/nickelback.jpg";
import skillet from "../../../pics/skillet.jpg";

function Home(props) {
  let box = [];
  let hr = "";
  box.push(
    <Link to="/Library" style={{ textDecoration: "none", color: "white" }}>
      <div className="boxes">Library</div>
    </Link>
  );
  for (let i = 1; i < 6; i++) {
    let text;
    let pic = "";
    switch (i) {
      case 1:
        text = "Acoustic Hits";
        hr="Acoustic";
        pic = acoustic;
        break;
      case 2:
        text = "Electronic";
        pic = electro;
        hr="Electronic";
        break;
      case 3:
        text = "Romantic";
        pic = romantic;
        hr="Romantic";
        break;
      case 4:
        text = "Hip-Hop";
        hr="Hip-Hop";
        pic = hiphop;
        break;
      case 5:
        text = "Global Top";
        hr="Global";
        pic = music;
        break;
    }
    box.push(
      <Link to={"/Listen#"+hr+"/static"} style={{ textDecoration: "none", color: "white" }}>
      <div
        className="boxes"
        style={{
          backgroundImage: "url(" + pic + ")",
          backgroundSize: "100% 100%",
        }}>
        <span className="darckBG">{text}</span>
      </div>
      </Link>
    );
  }

  let bigbox1 = [];
  for (let i = 0; i < 3; i++) {
    let text;
    let pic = "";
    switch (i) {
      case 0:
        text = "Rock Hits";
        hr = "Rock";
        pic = rock;
        break;
      case 1:
        text = "Pop Hits";
        hr = "Pop";
        pic = pop;
        break;
      case 2:
        text = "Classical";
        hr = "Classical"
        pic = classic;
        break;
    }
    bigbox1.push(
      <Link to={"/Listen#"+hr+"/static"} style={{ textDecoration: "none", color: "white" }}>
      <div
        className="bigboxes"
        style={{
          backgroundImage: "url(" + pic + ")",
          backgroundSize: "100% 100%",
        }}>
        <span className="darckBG">{text}</span>
      </div>
      </Link>
    );
  }
  let bigbox2 = [];
  for (let i = 0; i < 3; i++) {
    let text;
    let pic = "";
    switch (i) {
      case 0:
        text = "Queen, My darkest Days";
        hr="Queen";
        pic = queen;
        break;
      case 1:
        text = "Nickelback, Shinedown";
        pic = nickelback;
        hr="Nickelback";
        break;
      case 2:
        text = "Skillet, Three Days Grace";
        pic = skillet;
        hr="Skillet";
        break;
    }
    bigbox2.push(
      <Link to={"/Listen#"+hr+"/static"} style={{ textDecoration: "none", color: "white" }}>
      <div
        className="bigboxes"
        style={{
          backgroundImage: "url(" + pic + ")",
          backgroundSize: "100% 100%",
        }}>
        <span className="darckBG">{text}</span>
      </div>
      </Link>
    );
  }

  return (
    <div className="Home">
      <div className={props.theme[props.theme[0]]+" Theme"}>
        <Link to="/MySettings" style={{ textDecoration: "none"}} className="settingsButton">
          <img src={settingsPic} alt="set"/>
        </Link>
        <br />
        <br />
        <a className="text">Good morning</a>
        <div className="wrapper">{box.map((e) => e)}</div>
        <a className="text">Shows to try</a>
        <div className="wrapper">{bigbox1.map((e) => e)}</div>
        <a className="text">Your Top Mixes</a>
        <div className="wrapper">{bigbox2.map((e) => e)}</div>
      </div>
    </div>
  );
}

export default Home;
