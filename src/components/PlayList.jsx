import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useCallback } from "react";
import TrackList from "./TrackList";

const PlayList = ({
  playlistName,
  onNameChange,
  playlistTracks,
  onAdd,
  onRemove,
  onSave,
}) => {
  const handleNameChange = useCallback(
    (e) => {
      onNameChange(e.target.value);
    },
    [onNameChange],
  );

  return (
    <>
      <div className="flex sm:py-3">
        <input
          className="mr-2 w-full appearance-none rounded border border-green-400 px-3 py-2 text-white"
          type="text"
          value={playlistName}
          onChange={handleNameChange}
        ></input>
        <button
          className="bg-green-gradient ml-2 rounded px-[17px] py-2"
          onClick={onSave}
        >
          <FontAwesomeIcon icon={faSave} />
        </button>
      </div>
      <div className="h-[75vh] overflow-y-scroll">
        <TrackList
          tracks={playlistTracks}
          onAdd={onAdd}
          onRemove={onRemove}
          isRemovable={true}
        />
      </div>
    </>
  );
};

PlayList.propTypes = {
  playlistName: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  playlistTracks: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default PlayList;
