import React, { useState, useEffect, useRef } from "react";
import downloadIcon from '../../images/download.svg';
import playIcon from '../../images/play.svg';
import pauseIcon from '../../images/pause.svg';

const formatDuration = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

const AudioPlayer = ({ src }) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef();

  const updateProgress = () => {
    const duration = audioRef.current.duration;
    const currentTime = audioRef.current.currentTime;
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
    setDuration(currentTime);
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateProgress);
    audio.addEventListener('ended', () => setPlaying(false));

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', updateProgress);
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [playing]);

  const handlePlayPause = () => setPlaying(!playing);

  return (
    <div className='audio-player'>
      <audio src={src} ref={audioRef} style={{display: 'none'}} />
      <p className='audio-player__duration'>{formatDuration(duration)}</p>
      <button className='play-pause-btn' onClick={handlePlayPause}>
        <img src={playing ? pauseIcon : playIcon} alt="Play/Pause" />
      </button>
      <div className='progress-bar'>
        <div className='progress-bar__inner' style={{ width: `${progress}%` }} />
      </div>
      <a href={src} download className="download-btn">
        <img src={downloadIcon} alt="Download" />
      </a>
    </div>
  );
};

export default AudioPlayer;