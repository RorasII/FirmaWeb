import { useState } from "react";
import "./Test.css";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { drawSomething } from "./Test";

function Test() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const render = (time) => {
      drawSomething(ctx, time); // Call your draw function
      animationFrameId = requestAnimationFrame(render); // Request next frame
    };

    render(); // Start the animation loop

    return () => {
      cancelAnimationFrame(animationFrameId); // Cleanup on component unmount
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={1000} height={600} style={{ border: "1px solid black" }}></canvas>
    </div>
  );
}

export default Test;
