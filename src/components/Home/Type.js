import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Content Creator",
          "Graphics Designer",
          "Web Developer",
          "Open Source Contributor",
          "Technical Writer",
          "Content Writer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
