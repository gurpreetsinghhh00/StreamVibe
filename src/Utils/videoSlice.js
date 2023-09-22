import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: [],
  reducers: {
    addVideos: (state, action) => {
      if (state.length > 100) {
        state.splice(0, 40);
      }
      state.push(...action.payload);
    },
  },
});

export const { addVideos } = videoSlice.actions;
export default videoSlice.reducer;
