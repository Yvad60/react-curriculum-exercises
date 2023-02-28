export default function ExperienceCard({
  title,
  price,
  coverImg,
  stats,
  location,
  openSpots,
}) {
  return (
    <div className="relative flex-shrink-0 w-[179px]">
      <span className="absolute top-0 ml-2 leading-3 text-center uppercase bg-white rounded-sm text-[11px] w-[62px] py-[4px] mt-[6px]">
        {openSpots > 0 ? "Online" : "Sold out"}
      </span>
      <img src={coverImg} alt="" className="w-full" />
      <div className="flex flex-col mt-2 text-xs gap-[6px]">
        <div className="flex items-center gap-[2px]">
          <i className="bi bi-star-fill text-[#FE395C]"></i>
          <span>{stats?.rating}</span>
          <span className="text-[#918E9B]">{`(${stats?.reviewCount})`}</span>
          <span className="w-[1px] h-[2px] rounded-full bg-[#918E9B]"></span>
          <span className="text-[#918E9B]">{location}</span>
        </div>
        <p>{title}</p>
        <p>
          <span className="font-semibold">From {price}</span> / person
        </p>
      </div>
    </div>
  );
}
