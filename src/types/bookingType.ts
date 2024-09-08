type TUser = {
  _id: string;
  address: string;
  email: string;
  isDeleted: boolean;
  name: string;
  phone: string;
  role: string;
};

type TCar = {
  _id: string;
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  image: string[];
  features: string[];
  isDeleted: boolean;
  pricePerHour: number;
  status: string;
};

export type TBookingInfoDetails = {
  _id: string;
  date: Date;
  user?: TUser;
  car?: TCar;
  startTime: string;
  endTime: string;
  totalCost: number;
};
