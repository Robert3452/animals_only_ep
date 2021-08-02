import React, { useState, useEffect, useRef } from "react";
import ICouldFindAPlace from '../../../assets/audios/I COULD FIND A PLACE MASTER 16 BITS.wav'

const AudioPlayer = () => {
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const progressBar = useRef();
  const audioPlayer = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  return (
    <div className="audio_container">
      <div className="player_details">
        <div className="player_details__btn">
          <button type="button" id="playPause" onClick={togglePlayPause} className="player__btn">
            {!isPlaying ? (
              <i className="player__btn__icon fas fa-play fa-lg"></i>
            ) : (
              <i className="player__btn__icon fas fa-pause fa-lg"></i>
            )}
          </button>
        </div>
        <div className="player_info">
          <span className="audio_title">I could Find a Place</span>
          <span className="author_title">Animals Only</span>
        </div>
        <div className="player_details__duration">
          <div className="loader hide"></div>
          <span className="player_duration">3:42</span>
        </div>
      </div>
      <audio
        id="audio_01"
        ref={audioPlayer}
        src={ICouldFindAPlace}
        className="audio"
      ></audio>
      <div className="progressbar_container">
        <input
          ref={progressBar}
          className="progressBar"
          type="range"
          max="100"
          min="0"
          value="0"
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
