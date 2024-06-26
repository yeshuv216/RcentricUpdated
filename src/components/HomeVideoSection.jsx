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
        className="h-screen w-full object-cover object-center"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute left-0 top-0 z-[1] h-full w-full bg-black/50"></div>
      <div className="abs-center container z-[5] flex w-11/12 flex-col items-center">
        <h1 className="title text-center text-white">{title}</h1>
        <p className="para mt-6 w-full text-center text-white lg:w-[60%]">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HomeVideoSection;
