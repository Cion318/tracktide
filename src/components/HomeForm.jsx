import { useState } from "react";
import Spotify from "../utils/spotify";

import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";

const HomeForm = () => {
  const [clientId, setClientId] = useState("");
  const [invalidId, setInvalidId] = useState(true);

  const handleButtonClick = () => {
    if (clientId.length === 32) {
      setInvalidId(true);
      Spotify.getAccessToken(clientId);
    } else {
      setInvalidId(false);
      console.log("LOG (HomeForm.jsx): Wrong clientId provided");
    }
  };

  return (
    <div className="bg-green-gradient flex h-[360px] w-[360px] cursor-pointer items-center justify-center rounded-full p-[2px]">
      <div className="flex h-[100%] w-[100%] flex-col items-center justify-center rounded-full bg-primary">
        <div className="items-start justify-center">
          <p className="py-2 font-poppins text-4xl font-medium">
            <span className="text-green-gradient">Get Started</span>
          </p>
        </div>
        <form>
          <div className="flex">
            <LoginInput setClientId={setClientId} />
            <LoginButton onClick={handleButtonClick} />
          </div>
        </form>
        {!invalidId ? (
          <p className="pt-1 text-sm text-red-500">Invalid Client Id.</p>
        ) : (
          <p className="pt-1text-sm text-transparent">.</p>
        )}
      </div>
    </div>
  );
};

export default HomeForm;
