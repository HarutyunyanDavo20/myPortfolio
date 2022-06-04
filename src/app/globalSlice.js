import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: "",
  url: "",
  width: 0,
  height: 0,
  isLoading: false,
  error: false,
};

const globalSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    openCatModal: (state, { payload }) => {
      const {name, url, width, height} = payload
      state.modal = name;
      state.url = url
      state.width = width
      state.height = height
    },
    closeCatModal: (state) => {
      state.modal = "";
      state.url = "";
    },
  },
});

export const { openCatModal, closeCatModal } = globalSlice.actions;

export default globalSlice.reducer;
