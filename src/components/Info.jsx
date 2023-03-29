import businesswoman from "../assets/businesswoman.png";
import Button from "./Button";

export default function Info() {
  return (
    <div>
      <img src={businesswoman} alt="businesswoman" />
      <div className="pt-5 pb-8 text-center px-9">
        <h4 className="text-2xl font-bold leading-7 text-white">Laura Smith</h4>
        <h6 className="text-xs text-[#F3BF99] leading-4 mt-[6px]">
          Frontend developer
        </h6>
        <p className="text-[10px] text-[#F5F5F5] mt-2">laurasmith.website</p>
        <div className="flex gap-4 mt-4">
          <Button className="w-full bg-white text-primary">
            <i class="bi bi-envelope-fill"></i>
            <span className="text-sm font-medium">Email</span>
          </Button>
          <Button className="text-primary bg-[#5093E2] text-white w-full">
            <i class="bi bi-linkedin"></i>
            <span className="text-sm font-medium">Linkedin</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
