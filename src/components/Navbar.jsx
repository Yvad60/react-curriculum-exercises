import { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import CenterContent from "./CenterContent";

export default function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (isDarkTheme) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDarkTheme]);

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <header className="bg-[#FFFFFF] dark:bg-[#21222A] shadow-navbar mb-1 dark:mb-0">
      <CenterContent>
        <div className="flex items-center justify-between py-8">
          <div>
            <img
              src={reactLogo}
              alt="React logo"
              className="inline-block w-10"
            />
            <span className="font-bold text-[#61DAFB] text-[22px] leading-6 ml-2">
              ReactFacts
            </span>
          </div>
          <div className="flex items-center justify-center gap-3 text-lg">
            <span className="text-[#21222A] dark:text-[#918E9B]">Light</span>
            <div>
              <label
                htmlFor="theme"
                className="relative block bg-[#21222A] dark:bg-white rounded-full w-[34px] h-[20px]"
              >
                <input
                  type="checkbox"
                  name=""
                  id="theme"
                  className="hidden"
                  onChange={toggleDarkTheme}
                />
                <div
                  className={`w-4 h-4 rounded-full bg-white dark:bg-[#21222A] absolute ease-in duration-300 top-[2px] ${
                    isDarkTheme ? "translate-x-[98%]" : "left-[5%]"
                  }`}
                ></div>
              </label>
            </div>
            <span className="text-[#918E9B] dark:text-white">Dark</span>
          </div>
        </div>
      </CenterContent>
    </header>
  );
}
