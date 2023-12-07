import { faList, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";

import PlayList from "../components/PlayList";
import SearchBar from "../components/SearchBar";
import TrackList from "../components/TrackList";
import Spotify from "../utils/spotify";

const Main = () => {
  const [showTracklist, setShowTracklist] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    setPlaylistName("New Playlist");

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
        return;
      }

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks],
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id),
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    // Check for valid parameters
    if (playlistName && trackUris.length > 0) {
      Spotify.savePlaylist(playlistName, trackUris, "").then(() => {
        setPlaylistName("New Playlist");
        setPlaylistTracks([]);
      });
    } else {
      console.error("Invalid parameters for savePlaylist");
    }
  }, [playlistName, playlistTracks]);

  const handleSwitchClick = useCallback(() => {
    setShowTracklist(!showTracklist);
  }, [showTracklist]);

  return (
    <>
      <div className="flex justify-center lg:gap-10">
        {(screenWidth >= 1024 || showTracklist) && (
          <div className="">
            <SearchBar onSearch={search} />
            <div className="h-[65vh] w-[290px] overflow-y-scroll sm:w-[445px] md:w-[450px] lg:w-[404px] xl:h-[80vh] xl:w-[454px] 2xl:w-[512px]">
              <TrackList
                tracks={searchResults}
                onAdd={addTrack}
                onRemove={removeTrack}
                isRemovable={false}
              />
              {screenWidth < 1024 && (
                <button
                  className="bg-green-gradient fixed bottom-10 rounded-full px-3 py-2 sm:px-4 sm:py-[13px] sm:text-xl md:left-40"
                  onClick={handleSwitchClick}
                >
                  <FontAwesomeIcon icon={faList} />
                </button>
              )}
            </div>
          </div>
        )}

        {(screenWidth >= 1024 || !showTracklist) && (
          <div>
            <PlayList
              playlistName={playlistName}
              playlistTracks={playlistTracks}
              onNameChange={updatePlaylistName}
              onAdd={addTrack}
              onRemove={removeTrack}
              onSave={savePlaylist}
            />
            {screenWidth < 1024 && (
              <button
                className="bg-blue-gradient fixed bottom-10 rounded-full px-3 py-2 sm:px-4 sm:py-[13px] sm:text-xl md:left-40"
                onClick={handleSwitchClick}
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
