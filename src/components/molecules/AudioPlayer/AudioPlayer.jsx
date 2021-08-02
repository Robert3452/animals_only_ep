import React, { useState, useEffect, useRef } from "react";
import ICouldFindAPlace from "../../../assets/audios/I COULD FIND A PLACE MASTER 16 BITS.wav";

const AudioPlayer = () => {
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const progressBar = useRef();
  const animationRef = useRef();
  const audioPlayer = useRef();

  useEffect(() => {
    setTimeout(() => {
      const seconds = Math.floor(audioPlayer.current.duration);
      setDuration(seconds);
      progressBar.current.max = seconds;
    }, 50);
    progressBar.current.value = 0;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);
  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
        cancelAnimationFrame(animationRef.current);
    }
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--value",
      `${(progressBar.current.value / duration) * 100}%`
    );
  };

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  return (
    <div className="audio_container">
      <div className="player_details">
        <div className="player_details__btn">
          <button
            type="button"
            id="playPause"
            onClick={togglePlayPause}
            className="player__btn"
          >
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
          <span className="player_duration">{calculateTime(duration)}</span>
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
          onChange={changeRange}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
