import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useCallback } from "react";

const Track = ({ track, onAdd, onRemove, isRemovable }) => {
  const addTrack = useCallback(() => {
    onAdd(track);
  }, [track, onAdd]);

  const removeTrack = useCallback(() => {
    onRemove(track);
  }, [track, onRemove]);

  const renderAction = () => {
    if (isRemovable) {
      return (
        <button
          className="bg-green-gradient rounded-full px-[9px] py-1 text-white sm:px-[14px] sm:py-2 sm:text-2xl"
          onClick={removeTrack}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      );
    } else {
      return (
        <button
          className="bg-green-gradient rounded-full px-[9px] py-1 text-white sm:px-[14px] sm:py-2 sm:text-2xl"
          onClick={addTrack}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      );
    }
  };

  return (
    <div className="my-2 flex items-center border border-gray-800 pr-7">
      <div className="sm:p-2">
        <img className="hidden sm:block sm:w-[160px]" src={track.albumCover} />
      </div>
      <div className="p-2 text-left">
        <h2 className="w-52 overflow-auto whitespace-nowrap sm:w-72 sm:text-xl">
          {track.name}
        </h2>
        <h2 className="overflow-auto whitespace-nowrap pt-3 text-sm sm:w-72">
          {track.artist} | {track.album}
        </h2>
        <div className="sm:pt-4">
          <audio controls className="hidden sm:block sm:h-10">
            {track.previewUrl && (
              <source src={track.previewUrl} type="audio/mp3" />
            )}
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
      <div className="ml-4 sm:ml-10">{renderAction()}</div>
    </div>
  );
};

Track.propTypes = {
  track: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  isRemovable: PropTypes.bool.isRequired,
};

export default Track;
