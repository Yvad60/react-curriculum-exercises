import trollFace from "../assets/troll-face.svg";
import CenterContent from "./CenterContent";

const NavBar = () => {
  return (
    <header className="text-white bg-dark-to-light-violet-gradient">
      <CenterContent>
        <div className="flex items-center justify-between py-5">
          <nav className="flex items-center gap-2">
            <img src={trollFace} alt="Troll face icon" className="w-10" />
            <span className="font-bold leading-6 text-xl -tracking-wide">Meme Generator</span>
          </nav>
          <span className="text-sm leading-4">React Course - Project 3</span>
        </div>
      </CenterContent>
    </header>
  );
};

export default NavBar;
