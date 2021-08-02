import React from "react";
import Cover from "./assets/img/portada_aunque_olvidemos_insistir.png";
import { AudioPlayer } from "./components/molecules";
import "./assets/styles/index.css";

function App() {
  return (
    <div className="App">
      <section className="album_cover">
        <div className="blur_cover"></div>
        <div className="album_cover__img">
          <img src={Cover} alt="" />
          <div className="album_cover__img__buttons">
            <a href="https://spotify.com">
              <i className="fab fa-spotify"></i>
              <span>Seguir</span>
            </a>
            <a href="https://spotify.com">
              <i className="fas fa-share-alt"></i>
              <span>Compartir</span>
            </a>
          </div>
        </div>
      </section>
      <section className="album_info">
        <div className="album_info__container">
          <div className="album_info__left">
            <h3>Aunque olvidemos insistir</h3>
            <h4>
              por{` `}
              <a href="#">Animals Only</a>
            </h4>
            <span>Obtén la música:</span>

            <a className="btn_distros" href="#">
              <i className="fab fa-spotify"></i>
              <span>Spotify</span>
            </a>
            <a className="btn_distros" href="#">
              <i className="fab fa-amazon"></i>
              <span>Amazon</span>
            </a>
            <a className="btn_distros" href="#">
              <i className="fab fa-apple"></i>
              <span>Apple music</span>
            </a>
            <a className="btn_distros" href="#">
              <i className="fab fa-youtube"></i>
              <span>Youtube</span>
            </a>
            <a className="btn_distros" href="#">
              <i className="fab fa-deezer"></i>
              <span>Deezer</span>
            </a>

            <hr className="division" />

            <div className="social_icons">
              <a href="#" className="social_icon">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="#" className="social_icon">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="social_icon">
                <i className="fab fa-youtube fa-lg"></i>
              </a>
            </div>
          </div>
          <div className="album_info__right">
            <div className="playlist_container">
              <AudioPlayer/>
            </div>
          </div>
        </div>

        <footer></footer>
      </section>
    </div>
  );
}

export default App;
