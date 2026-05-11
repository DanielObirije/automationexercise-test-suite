export type UserDetails = {
  title?: "mr" | "mrs";

  name: string;
  email: string;
  password: string;

  firstName: string;
  lastName: string;

  address: string;

  country: string;

  state: string;
  city: string;
  zipcode: string;

  mobileNumber: string;

  dob?: {
    day: string;
    month: string;
    year: string;
  };

  newsletter?: boolean;
  specialOffers?: boolean;

  company?: string;
  address2?: string;
};
