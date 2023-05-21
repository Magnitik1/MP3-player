import React, {useState} from 'react';
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Sidebar/Navigation/Home/Home";
import Search from './Components/Sidebar/Navigation/Search/Search';
import Library from './Components/Sidebar/Navigation/Library/Library';
import MySettings from './Components/Sidebar/Navigation/Home/MySettings/MySettings';
import Listen from './Components/Sidebar/Navigation/Library/Playlists/Listen/Listen';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App(props) {
  let [getsong, setsong] = useState(0);

  return (
    <BrowserRouter>
    <div className="App">
    <Sidebar getsong={getsong} setsong={setsong}/>
      <header className="App-header">
      <a className='bg'></a>
      <a className='gradient'></a>
        <Routes>
            <Route path='/Search' element={<Search theme={props.theme} AllSongs={props.AllSongs} foundSongs={props.foundSongs} getsong={getsong} setsong={setsong}/>}/>
            <Route path='/' element={<Home theme={props.theme}/>}/>
            <Route path='/Library' element={<Library theme={props.theme} AllSongs={props.AllSongs} allplaylists={props.allplaylists} state={props.state}/>}/>
            <Route path='/MySettings' element={<MySettings theme={props.theme}/>}/>
            <Route path='/Listen' element={<Listen AllSongs={props.AllSongs} theme={props.theme} allplaylists={props.allplaylists} mainplaylists={props.mainplaylists} getsong={getsong} setsong={setsong}/>}/>
        </Routes>
      </header>
    </div>
    </BrowserRouter> 
  );
}

export default App;
