import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const SnowfallBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles-snow"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // set zIndex to -1
        background: { color: "transparent" },
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#fff" },
          shape: { type: "circle" },
          opacity: { value: 0.7, random: true },
          size: { value: 3, random: true },
          move: {
            direction: "bottom",
            enable: true,
            outModes: { default: "out" },
            speed: 1.5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default SnowfallBackground; 