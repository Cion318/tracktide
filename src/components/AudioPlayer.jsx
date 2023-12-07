import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const AudioPlayer = ({ src }) => {
  const [isPlaying, setPlaying] = useState(false);
  const [audio] = useState(new Audio(src));

  useEffect(() => {
    audio.volume = 0.7;
  }, [audio]);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  const togglePlay = () => {
    setPlaying(!isPlaying);
  };

  return (
    <div>
      <button
        className="w-12 rounded-full border border-green-500"
        onClick={togglePlay}
      >
        {isPlaying ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </button>
    </div>
  );
};

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default AudioPlayer;
