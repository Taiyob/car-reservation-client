import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCarState = {
  name?: string;
  description?: string;
  color?: string;
  isElectric?: boolean;
  features?: string[];
  pricePerHour?: number;
  image?: string[];
};

const initialState: TCarState = {
  name: "",
  description: "",
  color: "",
  isElectric: false,
  features: [],
  pricePerHour: 0,
  image: [],
};

const carSlice = createSlice({
  name: "car",
  initialState: initialState,
  reducers: {
    setCarName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setCarDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setCarColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    setCarIsElectric: (state, action: PayloadAction<boolean>) => {
      state.isElectric = action.payload;
    },
    setCarFeatures: (state, action: PayloadAction<string[]>) => {
      state.features = action.payload;
    },
    setCarPricePerHour: (state, action: PayloadAction<number>) => {
      state.pricePerHour = action.payload;
    },
    setCarimage: (state, action: PayloadAction<string[]>) => {
      state.image = action.payload;
    },
  },
});

export const {
  setCarName,
  setCarDescription,
  setCarColor,
  setCarIsElectric,
  setCarFeatures,
  setCarPricePerHour,
  setCarimage,
} = carSlice.actions;
export default carSlice.reducer;
