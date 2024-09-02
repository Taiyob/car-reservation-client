import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUser = {
  _id: string;
  email: string;
  userRole: string;
  exp: number;
  iat: number;
};

type TUserCredentialState = {
  token: string | null;
  user: TUser | null;
};

const initialState: TUserCredentialState = {
  token: null,
  user: null,
};

const userCredentialSlice = createSlice({
  name: "userCredential",
  initialState: initialState,
  reducers: {
    setUserToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = { ...action.payload };
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUserToken, setUser, logOut } = userCredentialSlice.actions;
export default userCredentialSlice.reducer;
export const selectCurrentToken = (state: RootState) =>
  state.userCredentialInfo.token;
export const selectCurrentUser = (state: RootState) =>
  state.userCredentialInfo.user;
