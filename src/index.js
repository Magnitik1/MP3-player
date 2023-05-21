import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import allsongs from './Components/redux/allsongs';
import state from './Components/redux/state';
import theme from './Components/redux/theme';
import foundSongs from './Components/redux/foundSongs';
import allplaylists from './Components/redux/allplaylists';
import mainplaylists from './Components/redux/mainplaylists';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App AllSongs={allsongs} allplaylists={allplaylists} theme={theme} foundSongs={foundSongs} state={state} mainplaylists={mainplaylists}/>
);
