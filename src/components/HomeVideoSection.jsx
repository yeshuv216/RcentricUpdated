import React from "react";

const HomeVideoSection = ({ video, title, description }) => {
  return (
    <section className="relative">
      <video
        id="video"
        src={video}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="h-screen w-screen object-cover object-center"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute left-0 top-0 w-full h-full z-[1] bg-black/50"></div>
      <div className="abs-center z-[5]  w-full flex flex-col items-center">
        <h1 className="title text-center text-white">{title}</h1>
        <p className="para text-center mt-4 w-full lg:w-[60%] text-white">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HomeVideoSection;
