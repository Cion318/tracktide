import PropTypes from "prop-types";

import Track from "./Track";

const TrackList = ({ tracks, onAdd, onRemove, isRemovable }) => {
  return (
    <div className="">
      {tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={onAdd}
            onRemove={onRemove}
            isRemovable={isRemovable}
          />
        );
      })}
    </div>
  );
};

TrackList.propTypes = {
  tracks: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  isRemovable: PropTypes.bool.isRequired,
};

export default TrackList;
