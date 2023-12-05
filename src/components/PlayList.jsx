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
      <div className="flex">
        <input
          className="focus:shadow-outline mr-1 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-100 shadow focus:outline-none"
          type="text"
          value={playlistName}
          onChange={handleNameChange}
        ></input>
        <button
          className="focus:shadow-outline bg-green-gradient ml-1 rounded px-4 py-2 font-bold text-gray-100"
          onClick={onSave}
        >
          <FontAwesomeIcon icon={faSave} />
        </button>
      </div>
      <div className="h-[80vh] overflow-y-scroll">
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
