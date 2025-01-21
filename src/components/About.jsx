import React from "react";
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import zustandLogo from "../assets/zustand.svg";
import tanstackLogo from "../assets/tanstack.svg";
import tailwindLogo from "../assets/tailwind.svg";

const About = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This project was created by Filiov Illiya</h1>
      <div className="flex justify-center items-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://zustand-demo.pmnd.rs" target="_blank">
          <img src={zustandLogo} className="logo" alt="Zustand logo" />
        </a>
        <a href="https://tanstack.com/query/latest" target="_blank">
          <img
            src={tanstackLogo}
            className="logo react"
            alt="Tanstack/ReactQuery logo"
          />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <img src={tailwindLogo} className="logo" alt="Tailwind logo" />
        </a>
      </div>

      <h1>Vite + React + Zustand + Tanstack + TailWind</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          DONT CLICK {count}
        </button>
      </div>
    </>
  );
};

export default About;
