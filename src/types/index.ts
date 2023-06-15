interface UserDetailsDto {
  uid: string
  first_name: string
  last_name: string;
  email: string;
  avatar:string;
  phone_number: string;
  gender: string;
  date_of_birth: string;
  employment:{
    title: string;
  }
  address: {
    city: string;
    state: string;
    country: string;
  }
}

interface CleanUserDetails {
  uid: string;
  name: string;
  title: string;
  avatar: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  phoneNumber: string;
  address: string;
}
