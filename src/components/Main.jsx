import React from "react";
import reactLogo from "../assets/react.svg";
import CenterContent from "./CenterContent";

export default function () {
  const reactFacts = [
    "Was first released in 2013",
    "Was originally created by Jordan Walke",
    "Has well over 100K stars on GitHub",
    "Is maintained by Facebook",
    "Powers thousands of enterprise apps, including mobile apps",
  ];

  return (
    <main className="bg-white dark:bg-[#282D35] flex-1">
      <CenterContent>
        <div className="relative overflow-hidden text-[#282D35] dark:text-white pt-[56px]">
          <h1 className="font-bold leading-10 text-[40px] -tracking-wider">
            Fun facts about React
          </h1>
          <ul className="list-disc leading-5 marker:text-[#61DAFB] marker:text-3xl flex flex-col gap-5 mt-12 ml-12 max-w-[390px]">
            {reactFacts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
          <img
            src={reactLogo}
            alt="React logo"
            className="absolute top-0 right-0 w-1/2 translate-y-1/2 max-w-[300px] opacity-[0.15] dark:opacity-[0.07] grayscale"
          />
        </div>
      </CenterContent>
    </main>
  );
}
