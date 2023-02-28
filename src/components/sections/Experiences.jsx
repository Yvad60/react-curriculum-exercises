import experiences from "../../data";
import CenterContent from "../CenterContent";
import ExperienceCard from "../ExperienceCard";

export default function Experiences() {
  return (
    <section className="mt-12 text-[#222222] ">
      <CenterContent>
        <div className="flex w-full overflow-hidden gap-[18px]">
          {experiences.map((experience) => (
            <ExperienceCard {...experience} />
          ))}
        </div>
      </CenterContent>
    </section>
  );
}
