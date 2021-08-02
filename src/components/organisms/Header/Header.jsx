import React from "react";
import Cover from "../../../assets/img/portada_aunque_olvidemos_insistir.png";

const Header = () => {
  return (
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
  );
};

export default Header;
