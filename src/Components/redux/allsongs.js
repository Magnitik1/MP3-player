import axios from "axios";
import everylie from "../songs/everylie.mp3";
import fromGodsPerspective from "../songs/fromGodsPerspective.mp3";
import ogurcy from "../songs/ogurcy.mp3";
import s45 from "../songs/45.mp3";
import chlorine from "../songs/chlorine.mp3";
import hero from "../songs/hero.mp3";
import killerQueen from "../songs/killerQueen.mp3";
import monsters from "../songs/monsters.mp3";
import myDemons from "../songs/myDemons.mp3";
import nakamura from "../songs/nakamura.mp3";
import rhapsody from "../songs/rhapsody.mp3";
import riot from "../songs/riot.mp3";
import sadGirlSummer from "../songs/sadGirlSummer.mp3";
import stressOut from "../songs/stressOut.mp3";
import theDevilWent from "../songs/theDevilWent.mp3";

let songnow = 1


let AllSongs = [
  {
    id: 0,
    name: "Every Lie",
    author: "My Darkest Days",
    url: "https://m.media-amazon.com/images/I/51MJTfOLIrL.jpg",
    previewURL: everylie,
  },
  {
    id: 1,
    name: "From God's Perspective",
    author: "Bo Burnham",
    url: "https://images.genius.com/7b1d7039091fcb788554d74ff034e9a2.1000x1000x1.jpg",
    previewURL: fromGodsPerspective,
  },
  {
    id: 2,
    name: "Алюминивые огурцы",
    author: "Виктор Цой",
    url: "https://www.womanhit.ru/media/CACHE/images/articleimage2/2019/5/1_r3BoHBn/a0b46bfd1ad36fc3b7f3d5cb6361a8fe.jpg",
    previewURL: ogurcy,
  },
  {
    id: 3, 
    name: "Sad Girl Summer",
    author: "Maisie Peters",
    url: "https://i.scdn.co/image/ab67616d0000b273ca8a6a0c8d44c1a48e070a4e",
    previewURL: sadGirlSummer,
  },
  {
    id: 4,
    name: "Killer Queen",
    author: "Queen",
    url: "https://imgsvr.radiocut.site/get/crop/center/200/200/cuts_logos/77/f0/77f0dea5-948d-4efc-8de1-ffefb9e4de8e.jpg",
    previewURL: killerQueen,
  },
  {
    id: 5,
    name: "Bohemian Rapsody",
    author: "Queen",
    url: "https://cabecajovem.com.br/wp-content/uploads/2021/09/Bohemian-Rapsody.jpg",
    previewURL: rhapsody,
  },
  {
    id: 6,
    name: "The Devil Went Down to Georgia",
    author: "Nickelback",
    url: "https://i.scdn.co/image/ab67616d0000b27371a0bd079bd54b99f3f60bf4",
    previewURL: theDevilWent,
  },
  {
    id: 7,
    name: "Riot",
    author: "Three Days Grays",
    url: "https://i1.sndcdn.com/artworks-000164522272-vo3ahf-t500x500.jpg",
    previewURL: riot,
  },
  {
    id: 8,
    name: "Stressed Out",
    author: "Twenty One Pilots",
    url: "https://upload.wikimedia.org/wikipedia/en/4/48/TOP_Stressed_Out.jpg",
    previewURL: stressOut,
  },
  {
    id: 9,
    name: "Chlorine",
    author: "Twenty One Pilots",
    url: "https://i1.sndcdn.com/artworks-S4CPvBsx3q1iEBk4-GGQMHQ-t500x500.jpg",
    previewURL: chlorine,
  },
  {
    id: 10,
    name: "Rising Sun",
    author: "WWE",
    url: "https://i.scdn.co/image/ab67616d0000b27354b29be451e9c4b33123fd6f",
    previewURL: nakamura,
  },
  {
    id: 11,
    name: "Monsters",
    author: "Shinedown",
    url: "https://preview.redd.it/3bgjz0uzq4v61.png?auto=webp&s=073ae3d250012f68f0f074ce35b6889256308a18",
    previewURL: monsters,
  },
  {
    id: 12,
    name: "45",
    author: "Shinedown",
    url: "https://upload.wikimedia.org/wikipedia/en/c/ce/Shinedown_45.png",
    previewURL: s45,
  },
  {
    id: 13,
    name: "Hero",
    author: "Skillet",
    url: "https://i1.sndcdn.com/artworks-9u6eOee4F5lypXcb-U3vgOg-t500x500.jpg",
    previewURL: hero,
  },
  {
    id: 14,
    name: "My Demons",
    author: "Starset",
    url: "https://i1.sndcdn.com/artworks-7LCE3NCtcxuD-0-t500x500.jpg",
    previewURL: myDemons,
  },
];

axios.get("https://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4")
    .then((d) => {
      let r=AllSongs.length;
      let tr=d.data.tracks.length;
      for(let i=0; i<tr;i++){
        if(d.data.tracks[i].name!=="Unholy"&&d.data.tracks[i].artistName!=="Sam Smith"){
        AllSongs.push({id: i+r, name: d.data.tracks[i].name, author: d.data.tracks[i].artistName,
          url: `http://api.napster.com/imageserver/v2/artists/${d.data.tracks[i].artistId}/images/356x237.jpg`,
          previewURL: d.data.tracks[i].previewURL,
        })}
        else{
          r--
        }
      }})


export function getsongnow(){
  return songnow;
};
export function setsongnow(r){
  songnow = r;
};

export default AllSongs;
  

