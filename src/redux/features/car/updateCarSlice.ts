import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCarInfo = {
  carId?: string;
  carName: string;
  carImage?: string[];
  carColor: string;
  carDescription: string;
  carIsElectric: boolean;
  carFeaturesItem: string[];
  carPricePerHour: number;
  carStatus: string;
  carIsDeleted?: boolean;
};

const initialState: TCarInfo = {
  carName: "",
  carColor: "",
  carDescription: "",
  carFeaturesItem: [],
  carIsElectric: false,
  carPricePerHour: 0,
  carStatus: "",
  carImage: [],
};

const updateCarSlice = createSlice({
  name: "updateCar",
  initialState: initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.carName = action.payload;
    },
    updatedColor: (state, action: PayloadAction<string>) => {
      state.carColor = action.payload;
    },
    updatedDescription: (state, action: PayloadAction<string>) => {
      state.carDescription = action.payload;
    },
    updatedFeatures: (state, action: PayloadAction<string[]>) => {
      state.carFeaturesItem = action.payload;
    },
    updatedIsElectric: (state, action: PayloadAction<boolean>) => {
      state.carIsElectric = action.payload;
    },
    updatedStatus: (state, action: PayloadAction<string>) => {
      state.carStatus = action.payload;
    },
    updatedPricePerHour: (state, action: PayloadAction<number>) => {
      state.carPricePerHour = action.payload;
    },
    updatedImages: (state, action: PayloadAction<string[]>) => {
      state.carImage = action.payload;
    },
  },
});

export const {
  updateName,
  updatedColor,
  updatedDescription,
  updatedFeatures,
  updatedPricePerHour,
  updatedIsElectric,
  updatedStatus,
  updatedImages,
} = updateCarSlice.actions;
export default updateCarSlice.reducer;
