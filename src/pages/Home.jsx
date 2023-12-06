//import { useState } from "react";
//import { useNavigate } from "react-router-dom";

import HomeForm from "../components/HomeForm";

const Home = () => {
  return (
    <div>
      <section className="lg:flex xl:mx-10 2xl:mx-40">
        {/* Left Side */}
        <div className="my-4 flex flex-wrap items-center justify-start sm:my-10 sm:px-6 lg:pt-10">
          {/* Chips */}
          <div className="bg-banner-gradient mr-4 rounded-[10px]">
            <p className="px-3 py-1 text-[12px] text-dimWhite sm:px-4 sm:text-sm">
              Easy
            </p>
          </div>
          <div className="bg-banner-gradient mr-4 rounded-[10px]">
            <p className="px-3 py-1 text-[12px] text-dimWhite sm:px-4 sm:text-sm">
              Fast
            </p>
          </div>
          <div className="bg-banner-gradient rounded-[10px]">
            <p className="px-3 py-1 text-[12px] text-dimWhite sm:px-4 sm:text-sm">
              Reliable
            </p>
          </div>

          {/* Hero */}
          <div className="my-4 text-left">
            <h1 className="text-3xl font-semibold leading-[45px] text-white sm:text-[44px] sm:leading-[70px] md:text-5xl md:leading-[75px]">
              Your Next
              <br />
              <span className="text-green-gradient">Spotify Playlist</span>
              <br />
              Is Waiting For You
            </h1>

            <p className="pr-5 pt-8 text-left text-[12px] text-dimWhite sm:pr-20 sm:pt-10 sm:text-sm">
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
            <p className="pb-8 pr-5 text-left text-[12px] text-dimWhite sm:pb-10 sm:pr-20 sm:text-sm">
              <span className="text-white">2.</span> Add
              https://cion318.github.io/tracktide/ to the Redirect URIs field
              inside of your app.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="my-20 flex flex-wrap items-center justify-center sm:my-10 sm:px-6">
          <HomeForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
