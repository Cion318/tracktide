import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";

import AudioPlayer from "./AudioPlayer";

const Track = ({ track, onAdd, onRemove, isRemovable }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          className="bg-green-gradient rounded-full px-[9px] py-1 text-white xl:px-[12px] xl:py-[7px] 2xl:px-[14px] 2xl:py-2 2xl:text-2xl"
          onClick={removeTrack}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      );
    } else {
      return (
        <button
          className="bg-green-gradient rounded-full px-[9px] py-1 text-white xl:px-[12px] xl:py-[7px] 2xl:px-[14px] 2xl:py-[8px] 2xl:text-2xl"
          onClick={addTrack}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      );
    }
  };

  return (
    <>
      <div className="my-3 flex items-center justify-between gap-1 border border-gray-800">
        {/* Trackinfo */}
        <div className="flex">
          <div className="m-1 flex items-center justify-center">
            {screenWidth < 640 && <AudioPlayer src={track.previewUrl} />}
            <img
              className="hidden sm:block sm:w-[100px] md:w-[100px] lg:w-[90px] xl:w-[100px] 2xl:w-[110px]"
              src={track.albumCover}
            />
          </div>

          <div className="m-1 text-white">
            <h2 className="bold text-sm sm:text-lg xl:text-xl">{track.name}</h2>
            <h3 className="my-2 text-[12px] sm:text-sm">
              {track.artist} | {track.album}
            </h3>
            {screenWidth >= 640 && <AudioPlayer src={track.previewUrl} />}
          </div>
        </div>

        {/* Button */}
        <div className="mr-1 sm:mr-4">{renderAction()}</div>
      </div>
    </>
  );
};

Track.propTypes = {
  track: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  isRemovable: PropTypes.bool.isRequired,
};

export default Track;
