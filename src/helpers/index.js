const API_URL = "https://random-data-api.com/api/users/random_user?size=10";

export const fetchUsers = async () => {
  const response = await fetch(API_URL);
  const responseData = await response.json();
  return responseData;
};

export const selectNeededInfo = (userData) => {
  return userData.map((user) => {
    const {
      uid,
      first_name,
      last_name,
      email,
      avatar,
      phone_number,
      gender,
      date_of_birth,
      employment,
      address,
    } = user;
    return {
      uid,
      name: `${first_name} ${last_name}`,
      title: employment.title,
      avatar,
      dateOfBirth: date_of_birth,
      gender,
      email,
      phoneNumber: phone_number,
      address: `${address.city} ${address.state} ${address.country}`,
    };
  });
};
