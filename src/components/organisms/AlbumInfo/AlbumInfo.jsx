import React from "react";
import { AudioPlayer } from "../../molecules";
import { DistribuitorsButton, SocialButton } from "../../atoms";
import Disfraz from "../../../assets/audios/disfraz.mp3";
import Humo from "../../../assets/audios/humo_de_luna.mp3";
import ICould from "../../../assets/audios/i_could_find_a_place.mp3";
import SentirBien from "../../../assets/audios/sentir_bien.mp3";
import ThreeTimes from "../../../assets/audios/three_times_again.mp3";
import UnPocoMas from "../../../assets/audios/un_poco_mas.mp3";

const audios = [
  {
    audioAlbum: "Aunque olvidemos insistir",
    audioTitle: "Sentir Bien",
    audioAuthor: "Animals Only",
    fullAudioDuration: "03:42",
    audioSrc: SentirBien,
  },
  {
    audioAlbum: "Aunque olvidemos insistir",
    audioTitle: "Un poco más",
    audioAuthor: "Animals Only",
    fullAudioDuration: "04:03",
    audioSrc: UnPocoMas,
  },
  {
    audioAlbum: "Aunque olvidemos insistir",
    audioTitle: "Humo de luna",
    audioAuthor: "Animals Only",
    fullAudioDuration: "04:03",
    audioSrc: Humo,
  },
  {
    audioAlbum: "Aunque olvidemos insistir",
    audioTitle: "Three times again",
    audioAuthor: "Animals Only",
    fullAudioDuration: "05:05",
    audioSrc: ThreeTimes,
  },
  {
    audioAlbum: "Aunque olvidemos insistir",
    audioTitle: "Disfraz",
    audioAuthor: "Animals Only",
    fullAudioDuration: "04:33",
    audioSrc: Disfraz,
  },
  {
    audioAlbum: "Aunque olvidemos insistir",
    audioTitle: "I could find a place",
    audioAuthor: "Animals Only",
    fullAudioDuration: "04:21",
    audioSrc: ICould,
  },
];

const distrosData = [
  {
    link: "#",
    text: "Spotify",
    icon: "fab fa-spotify",
  },
  {
    link: "#",
    text: "Amazon",
    icon: "fab fa-amazon",
  },
  {
    link: "#",
    text: "Apple music",
    icon: "fab fa-apple",
  },
  {
    link: "#",
    text: "Youtube",
    icon: "fab fa-youtube",
  },
  {
    link: "#",
    text: "Deezer",
    icon: "fab fa-deezer",
  },
];

const socialData = [
  {
    link: "https://www.facebook.com/AnimalsOnlyBand",
    icon: "fab fa-facebook-f fa-lg",
  },
  {
    link: "https://www.instagram.com/animalsonlyband",
    icon: "fab fa-instagram fa-lg",
  },
  {
    link: "https://www.youtube.com/channel/UCXlAybhK47wy8k7A2EgWsxQ",
    icon: "fab fa-youtube fa-lg",
  },
];
const AlbumInfo = () => {
  return (
    <section className="album_info">
      <div className="album_info__container">
        <div className="album_info__left">
          <h3>Aunque olvidemos insistir</h3>
          <h4>por Animals Only</h4>
          <span>Obtén su música en:</span>

          {distrosData.map((item, index) => (
            <DistribuitorsButton key={index} {...item} />
          ))}
          <hr className="division" />

          <div className="social_icons">
            {socialData.map((el, index) => (
              <SocialButton key={index} {...el} />
            ))}
          </div>
        </div>
        <div className="album_info__right">
          <div className="playlist_container">
            {audios.map((el, index) => (
              <AudioPlayer key={index} {...el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbumInfo;
