import heroGrid from "../../assets/hero_grid.png";
import CenterContent from "../CenterContent";

export default function Hero() {
  return (
    <section className="pt-[26px]">
      <CenterContent>
        <img
          src={heroGrid}
          alt="a grid of several images"
          className="mx-auto w-[396px] pb-8"
        />
        <h1 className="font-semibold text-4xl">Online Experiences</h1>
        <p className="max-w-[347px] font-light">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </CenterContent>
    </section>
  );
}
