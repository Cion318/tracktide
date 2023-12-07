import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spotify from "../utils/spotify";

import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";

const HomeForm = () => {
  const [clientId, setClientId] = useState("");
  const [invalidId, setInvalidId] = useState(true);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (clientId.length === 32) {
      setInvalidId(true);
      Spotify.getAccessToken(clientId);
      if (setTimeout(Spotify.checkAccessToken(), 400)) {
        navigate("/main");
      }
    } else {
      setInvalidId(false);
      console.log("LOG (HomeForm.jsx): Wrong clientId provided");
    }
  };

  return (
    <div className="bg-green-gradient flex h-[270px] w-[270px] cursor-pointer items-center justify-center rounded-full p-[2px] sm:h-[360px] sm:w-[360px]">
      <div className="flex h-[100%] w-[100%] flex-col items-center justify-center rounded-full bg-primary">
        <div className="items-start justify-center">
          <p className="py-2 font-poppins text-2xl font-medium sm:text-4xl">
            <span className="text-green-gradient">Get Started</span>
          </p>
        </div>
        <form>
          <div className="flex px-4">
            <LoginInput setClientId={setClientId} />
            <LoginButton onClick={handleButtonClick} />
          </div>
        </form>
        {!invalidId ? (
          <p className="pt-1 text-[12px] text-red-500">Invalid Client Id.</p>
        ) : (
          <p className="pt-1 text-[12px] text-transparent">.</p>
        )}
      </div>
    </div>
  );
};

export default HomeForm;
