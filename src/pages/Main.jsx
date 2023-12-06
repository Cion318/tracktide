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
      console.log(`Log Main.jsx: addTrack being called.`);
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
        console.log(`Log Main.jsx: Track already in playlist.`);
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
      <div className="xl:flex xl:justify-around">
        {(screenWidth >= 1280 || showTracklist) && (
          <div className="xl:mr-5 xl:block">
            <SearchBar onSearch={search} />
            <div className="h-[65vh] overflow-y-scroll xl:h-[80vh]">
              <TrackList
                tracks={searchResults}
                onAdd={addTrack}
                onRemove={removeTrack}
                isRemovable={false}
              />
              {screenWidth < 1280 && (
                <button
                  className="bg-green-gradient fixed bottom-8 left-8 rounded-full px-3 py-2 sm:px-4 sm:py-[13px] sm:text-3xl"
                  onClick={handleSwitchClick}
                >
                  <FontAwesomeIcon icon={faList} />
                </button>
              )}
            </div>
          </div>
        )}

        {(screenWidth >= 1280 || !showTracklist) && (
          <div className="xl:ml-5 xl:block">
            <PlayList
              playlistName={playlistName}
              playlistTracks={playlistTracks}
              onNameChange={updatePlaylistName}
              onAdd={addTrack}
              onRemove={removeTrack}
              onSave={savePlaylist}
            />
            {screenWidth < 1280 && (
              <button
                className="bg-blue-gradient fixed bottom-8 left-8 rounded-full px-3 py-2 sm:px-4 sm:py-[13px] sm:text-3xl"
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
