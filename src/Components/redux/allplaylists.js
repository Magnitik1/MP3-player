import heart from "../pics/heart.png";
import all from "../pics/allmusic.svg";

let pl = [1];
let id = 1;
let playlists = [
  {
    id: 1,
    name: "All Songs",
    picture: all,
    songs: [-1]
  },
  {
    id: 2,
    name: "Favorite",
    picture: heart,
    songs: [1, 0, 3, 5, 8, 14], //масив з id пісень цього плейлиста
  },
  {
    id: 3,
    name: "Playlist#1",
    picture: "https://m.media-amazon.com/images/I/51MJTfOLIrL.jpg",
    songs: [0, 4, 3, 8, 13],
  },
  {
    id: 4,
    name: "Funny Songs",
    picture:
      "https://images.genius.com/7b1d7039091fcb788554d74ff034e9a2.1000x1000x1.jpg",
    songs: [2, 1],
  },
  {
    id: 5,
    name: "Playlist#2",
    picture: "https://i.scdn.co/image/ab67616d0000b273ca8a6a0c8d44c1a48e070a4e",
    songs: [4, 3, 6, 7, 10, 14],
  },
  {
    id: 6,
    name: "Playlist#3",
    picture:
      "https://imgsvr.radiocut.site/get/crop/center/200/200/cuts_logos/77/f0/77f0dea5-948d-4efc-8de1-ffefb9e4de8e.jpg",
    songs: [4, 6, 8, 13],
  },
];

export function getplaylist() {
  return pl;
}
export function getplaylistid() {
  return id;
}
export function setplaylist(r, id1) {
  pl = r;
  id = id1;
}

export default playlists;
