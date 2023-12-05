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
          className="bg-green-gradient rounded-full px-[14px] py-2 text-2xl text-white"
          onClick={removeTrack}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      );
    } else {
      return (
        <button
          className="bg-green-gradient rounded-full px-[14px] py-2 text-2xl text-white"
          onClick={addTrack}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      );
    }
  };

  return (
    <div className="my-2 flex items-center border border-gray-800 pr-7">
      <div className="p-2">
        <img className="w-[160px]" src={track.albumCover} />
      </div>
      <div className="p-2 text-left">
        <h2 className="w-72 overflow-auto whitespace-nowrap text-xl">
          {track.name}
        </h2>
        <h2 className="w-72 overflow-auto whitespace-nowrap pt-3">
          {track.artist} | {track.album}
        </h2>
        <div className="pt-4">
          <audio controls className="h-10">
            {track.previewUrl && (
              <source src={track.previewUrl} type="audio/mp3" />
            )}
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
      <div className="ml-10">{renderAction()}</div>
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
