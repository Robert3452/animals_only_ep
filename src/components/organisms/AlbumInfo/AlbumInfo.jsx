import React, { useEffect, useState } from "react";
import { AudioPlayer } from "../../molecules";
import { DistribuitorsButton, SocialButton } from "../../atoms";
import axios from "axios";

const AlbumInfo = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("http://52.87.230.65/api/data")
      .then(({ data, status }) => {
        setData(data);
        console.log(status);
      })
      .catch((error) => console.log(error));
  }, []);

  return data !== null ? (
    <section className="album_info">
      <div className="album_info__container">
        <div className="album_info__left">
          <h3>Aunque olvidemos insistir</h3>
          <h4>por Animals Only</h4>
          <span>Obtén su música en:</span>

          {data.distrosData.map((item, index) => (
            <DistribuitorsButton key={index} {...item} />
          ))}
          <hr className="division" />

          <div className="social_icons">
            {data.socialData.map((el, index) => (
              <SocialButton key={index} {...el} />
            ))}
          </div>
        </div>
        <div className="album_info__right">
          <div className="playlist_container">
            {data.audios.map((el, index) => (
              <AudioPlayer key={index} {...el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  ) : (
    <div className="loader"></div>
  );
};

export default AlbumInfo;
