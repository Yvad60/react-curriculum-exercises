import reactLogo from "../assets/react.svg";
import CenterContent from "./CenterContent";

export default function Navbar() {
  return (
    <header className="bg-[#21222A]">
      <CenterContent>
        <div className="flex justify-between py-8 items-center">
          <div>
            <img
              src={reactLogo}
              alt="React logo"
              className="w-10 inline-block"
            />
            <span className="font-bold text-[#61DAFB] text-[22px] leading-6 ml-2">
              ReactFacts
            </span>
          </div>
          <h5 className="text-[#DEEBF8] leading-[19px] font-semibold">
            React Course - Project 1
          </h5>
        </div>
      </CenterContent>
    </header>
  );
}
