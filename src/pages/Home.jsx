//import { useState } from "react";
//import { useNavigate } from "react-router-dom";

import HomeForm from "../components/HomeForm";

const Home = () => {
  return (
    <section className="lg:flex lg:items-center lg:justify-center">
      {/* Hero Unit */}
      <div className="2xl:min-w-xl xl:min-w-lg sm:min-w-md mx-auto min-w-[276px] max-w-[276px] text-dimWhite sm:max-w-md lg:mx-5 xl:mx-10 xl:max-w-lg 2xl:mx-20 2xl:max-w-xl">
        {/* Chips */}
        <div className="lg:text-md xl:text-md flex items-center justify-start text-sm 2xl:text-lg">
          <p className="bg-banner-gradient mr-3 rounded-xl px-3 py-1 2xl:mr-4 2xl:px-4">
            Easy
          </p>
          <p className="bg-banner-gradient mr-3 rounded-xl px-3 py-1 2xl:mr-4 2xl:px-4">
            Fast
          </p>
          <p className="bg-banner-gradient mr-3 rounded-xl px-3 py-1 2xl:mr-4 2xl:px-4">
            Reliable
          </p>
        </div>

        {/* Text */}
        <div className="my-6">
          <h1 className="text-3xl font-semibold leading-[45px] text-white sm:text-5xl sm:leading-[70px] 2xl:text-6xl 2xl:leading-[75px]">
            Your Next <br />
            <span className="text-green-gradient">Spotify Playlist</span>
            <br /> Is Waiting For You
          </h1>
        </div>

        {/* Subtext */}
        <div className="sm:text-md text-[12px] text-dimWhite">
          <p>
            <span className="text-white">1.</span> Follow{" "}
            <a
              className="text-blue-400"
              href="https://developer.spotify.com/documentation/web-api/concepts/apps"
              target="_blank"
              rel="noreferrer"
            >
              this
            </a>{" "}
            guide to setup a client id.
          </p>
          <p>
            <span className="text-white">2.</span> Add
            https://cion318.github.io/tracktide/ to the Redirect URIs field
            inside of your app.
          </p>
        </div>
      </div>

      {/* Login Unit */}
      <div className="mx-auto mt-16 min-w-[270px] max-w-[270px] sm:min-w-[360px] sm:max-w-[360px] lg:mx-5 lg:mt-0 xl:mx-10 2xl:mx-20">
        <HomeForm />
      </div>
    </section>
  );
};

export default Home;
