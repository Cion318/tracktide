//import { useState } from "react";
//import { useNavigate } from "react-router-dom";

import HomeForm from "../components/HomeForm";

const Home = () => {
  return (
    <div>
      <section className="h-screen">
        {/* Left Side */}
        <div className="flex flex-wrap items-center justify-start sm:my-10 sm:px-6">
          {/* Banner */}
          <div className="bg-banner-gradient mr-4 rounded-[10px] px-4 py-1">
            <p className="text-dimWhite">Easy</p>
          </div>
          <div className="bg-banner-gradient mr-4 rounded-[10px] px-4 py-1">
            <p className="text-dimWhite">Fast</p>
          </div>
          <div className="bg-banner-gradient rounded-[10px] px-4 py-1">
            <p className="text-dimWhite">Reliable</p>
          </div>

          {/* Hero */}
          <div className="my-4 text-left">
            <h1 className="font-semibold text-white sm:text-[44px] sm:leading-[70px] md:text-5xl">
              Your Next
              <br />
              <span className="text-green-gradient">Spotify Playlist</span>
              <br />
              Just One Click Away
            </h1>

            <p className="text-left text-sm text-dimWhite sm:pr-20 sm:pt-10">
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
            <p className="text-left text-sm text-dimWhite sm:pb-10 sm:pr-20">
              <span className="text-white">2.</span> Add
              https://cion318.github.io/tracktide/ to the Redirect URIs field
              inside of your app.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap items-center justify-center sm:my-10 sm:px-6">
          <HomeForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
