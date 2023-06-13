import React, { useRef, useState } from 'react';
import pauseIcon from '../../images/pause.svg';
import playIcon from '../../images/play.svg';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  const formatDuration = duration => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    setProgress((current / duration) * 100);
  };

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
  };

  return (
    <div className='audio-player'>
      <audio 
        src={src} 
        ref={audioRef} 
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
        style={{display: 'none'}} 
      />
      <p className='audio-player__duration'>{formatDuration(duration)}</p>
      <button className='play-pause-btn' onClick={handlePlayPause}>
        <img src={playing ? pauseIcon : playIcon} alt="Play/Pause" />
      </button>
      <div className='progress-bar'>
        <div className='progress-bar__inner' style={{ width: `${progress}%` }} />
      </div>
      <a href={src} download className="download-btn">
        <svg 
          width="13" 
          height="16" 
          viewBox="0 0 13 16" 
          xmlns="http://www.w3.org/2000/svg" 
          className="download-icon"
        >
          <path 
            d="M0 16H13V14.1176H0V16ZM13 5.64706H9.28571V0H3.71429V5.64706H0L6.5 12.2353L13 5.64706Z" 
            fill="#ADBFDF" 
            className="download-icon__path"
          />
        </svg>
      </a>
    </div>
  );
};

export default AudioPlayer;
