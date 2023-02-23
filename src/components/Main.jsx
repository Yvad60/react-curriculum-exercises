import React from "react";
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
    <main className="bg-[#282D35] flex-1">
      <CenterContent>
        <div className="pt-[56px] text-white">
          <h1 className="font-bold text-[40px] leading-10 -tracking-wider">
            Fun facts about React
          </h1>
          <ul className="list-disc leading-5 marker:text-[#61DAFB] marker:text-3xl flex flex-col gap-5 mt-12 ml-12 max-w-[390px]">
            {reactFacts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      </CenterContent>
    </main>
  );
}
