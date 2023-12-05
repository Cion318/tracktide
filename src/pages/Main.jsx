import { faList, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PlayList from "../components/PlayList";
import SearchBar from "../components/SearchBar";
import TrackList from "../components/TrackList";
import Spotify from "../utils/spotify";

const Main = () => {
  const accessToken = Spotify.getAccessToken("");

  const [showTracklist, setShowTracklist] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setPlaylistName("New Playlist");
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
      {!accessToken && navigate("/")}
      <div className="">
        {showTracklist && (
          <>
            <SearchBar onSearch={search} />
            <div className="h-[75vh] overflow-y-scroll">
              <TrackList
                tracks={searchResults}
                onAdd={addTrack}
                onRemove={removeTrack}
                isRemovable={false}
              />
              <button
                className="bg-green-gradient fixed bottom-8 left-8 rounded-full px-4 py-[13px] text-3xl"
                onClick={handleSwitchClick}
              >
                <FontAwesomeIcon icon={faList} />
              </button>
            </div>
          </>
        )}

        {!showTracklist && (
          <>
            <PlayList
              playlistName={playlistName}
              playlistTracks={playlistTracks}
              onNameChange={updatePlaylistName}
              onAdd={addTrack}
              onRemove={removeTrack}
              onSave={savePlaylist}
            />
            <button
              className="bg-blue-gradient fixed bottom-8 left-8 rounded-full px-4 py-[13px] text-3xl"
              onClick={handleSwitchClick}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Main;
