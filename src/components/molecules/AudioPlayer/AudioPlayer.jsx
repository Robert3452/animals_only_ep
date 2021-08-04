import React, { useState, useEffect, useRef } from "react";

const AudioPlayer = ({
  audioTitle,
  audioAuthor,
  fullAudioDuration,
  audioSrc,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const progressBar = useRef();
  const animationRef = useRef();
  const audioPlayer = useRef();

  const setReady = (audio) => {
    if (audio.networkState === 1) {
      setIsReady(true);
    }
  };

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    progressBar.current.max = seconds;
    
    setReady(audioPlayer?.current);

  }, [
    audioPlayer?.current?.readyState,
    audioPlayer?.current?.loadedmetadata,
    audioPlayer?.current?.networkState,
  ]);

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
      `${(progressBar.current.value / audioPlayer.current?.duration) * 100}%`
    );
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
          <span className="audio_title">{audioTitle}</span>
          <span className="author_title">{audioAuthor}</span>
        </div>
        <div className="player_details__duration">
          <span className="player_duration">{fullAudioDuration}</span>
        </div>
      </div>
      <audio
        ref={audioPlayer}
        src={audioSrc}
        className="audio"
        preload="metadata"
      ></audio>
      <div className="progressbar_container">
        <input
          ref={progressBar}
          defaultValue="0"
          disabled={!isReady}
          className="progressBar"
          type="range"
          min="0"
          onChange={changeRange}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
