import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: false };

const authModal = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    setShowModal: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { setShowModal } = authModal.actions;
export default authModal.reducer;
export const selectShowModal = (state: { modal: { show: boolean } }) =>
  state.modal.show;
