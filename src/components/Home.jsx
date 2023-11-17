import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spotify from "../utils/Spotify";
import ClientId from "./ClientId";

function Home() {
  const navigate = useNavigate();

  const check = useCallback(
    (clientId) => {
      Spotify.checkAccess(clientId).then((isValid) => {
        if (isValid) {
          navigate("second-page");
        } else {
          alert("Invalid key. Please try again.");
        }
      });
    },
    [navigate],
  );

  return (
    <div>
      <h1 className="text-white-900 my-10 text-5xl font-bold sm:text-7xl lg:text-8xl">
        Ja<span className="text-green-600">mmm</span>ing
      </h1>
      <ClientId onCheck={check} />
    </div>
  );
}

export default Home;
