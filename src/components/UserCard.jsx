const UserCard = ({
  name,
  title,
  avatar,
  dateOfBirth,
  gender,
  email,
  phoneNumber,
  address,
}) => {
  return (
    <div className="card-scene">
      <div className="flip-card">
        <div className="flip-card-front">
          <div className="h-full bg-white rounded">
            <img
              src={avatar}
              alt={name}
              className="relative object-cover w-1/2 h-48 translate-x-1/2"
            />
            <div className="flex flex-col gap-2 px-5 pt-3 pb-6">
              <h4 className="text-lg font-semibold">{name}</h4>
              <p>{title}</p>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="h-full px-5 py-3 bg-white rounded">
            <h1 className="text-xl font-medium text-center">
              More information
            </h1>
            <div className="flex flex-col pt-6 gap-[6px]">
              <h3 className="font-bold">Personal info</h3>
              <h4>
                <span className="font-medium">Date of birth: </span>
                {dateOfBirth}
              </h4>
              <h4>
                <span className="font-medium">Gender: </span>
                {gender}
              </h4>
              <h3 className="mt-3 font-bold">Contact</h3>
              <h4>
                <span className="font-medium">Email: </span>
                {email}
              </h4>
              <h4>
                <span className="font-medium">Phone number: </span>
                {phoneNumber}
              </h4>
              <h4>
                <span className="font-semibold">Address: </span>
                {address}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
