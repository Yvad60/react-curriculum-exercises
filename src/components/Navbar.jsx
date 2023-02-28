import logo from "../assets/airbnb_logo.png";
import CenterContent from "./CenterContent";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-[22px]">
      <CenterContent>
        <img src={logo} alt="Airbnb logo" />
      </CenterContent>
    </header>
  );
}
