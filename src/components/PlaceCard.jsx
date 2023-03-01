const PlaceCard = ({
  name,
  country,
  googleMapLink,
  startDate,
  endDate,
  image,
  description,
}) => {
  return (
    <div className="flex text-[#2B283A] gap-5 items-center">
      <img
        src={image}
        alt=""
        className="w-[125px] h-[168px] object-cover rounded-md shadow-sm"
      />
      <div>
        <div className="flex items-center">
          <i className="bi bi-geo-alt-fill text-[#F55A5A] text-sm"></i>
          <span className="uppercase text-[11px] ml-1">{country}</span>
          <a
            href={googleMapLink}
            className="underline text-[11px] text-[#918E9B] ml-3"
            target="_blank"
          >
            View on Google Maps
          </a>
        </div>
        <h3 className="font-bold text-2xl leading-8">{name}</h3>
        <h5 className="text-[11px] font-bold mt-4">
          {startDate} - {endDate}
        </h5>
        <p className="text-[10.24px] mt-2">{description}</p>
      </div>
    </div>
  );
};

export default PlaceCard;
