const HomeContent = () => {
  return (
    <div className="hero-container flex h-screen items-center justify-center text-white">
      {/* Left Side */}
      <div className="left-side p-8 text-left">
        <h1 className="mb-4 text-4xl font-bold">
          Your Next
          <br />
          <em className="text-gradient">Spotify Playlist</em>
          <br />
          Is Just One Click Away
        </h1>
        <p className="text-lg">A brief description of your hero section.</p>
      </div>

      {/* Middle Image */}
      <img
        src="path/to/middle-image.jpg"
        alt="Middle Image"
        className="middle-image mx-8"
      />

      {/* Right Side */}
      <div className="right-side p-8 text-right">
        <h1 /> {/* Use the BoxContainer component */}
        <img
          src="path/to/right-image.jpg"
          alt="Right Image"
          className="right-image mt-8"
        />
      </div>
    </div>
  );
};

export default HomeContent;
