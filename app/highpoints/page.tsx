"use client";
import React, { useState, useEffect } from "react";
import AimBoard from "../components/AimBoard";
import NavigateButton from "../components/NavigateButton";

const Highpoints = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen min-w-screen flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
      <h3 className="text-5xl font-bold text-center text-white my-4">
        HIGHPOINTS
      </h3>
      {screenSize < 1920 ? (
        <div className="text-white text-center">
          You must have a screen size equal to or larger than 1920p.
        </div>
      ) : (
        <>
          <div className="mx-auto">
            <AimBoard />
          </div>
          <div className="grid grid-cols-6 gap-2 mt-4">
            <div className="col-span-1 mt-1">
              <NavigateButton buttonText="BACK" href="/" />
            </div>
            <div className="col-span-4 flex justify-start">
              <button className="w-[64px] bg-blue-600 hover:bg-blue-950 font-bold py-1 px-1 rounded text-white mr-1 shadow-lg">
                30s
              </button>
              <button className="w-[64px] bg-blue-600 hover:bg-blue-950 font-bold py-1 px-1 rounded text-white mr-1 shadow-lg">
                60s
              </button>
              <button className="w-[64px] bg-blue-600 hover:bg-blue-950 font-bold py-1 px-1 rounded text-white shadow-lg">
                90s
              </button>
            </div>
            <div className="col-span-1"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Highpoints;
