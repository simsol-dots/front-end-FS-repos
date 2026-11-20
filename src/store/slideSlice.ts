import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SlideState = {
  current: number;
};

const initialState: SlideState = { current: 0 };

const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    nextSlide: (state, action: PayloadAction<number>) => {
      state.current = (state.current + 1) % action.payload;
    },
    previousSlide: (state, action: PayloadAction<number>) => {
      state.current = (state.current - 1 + action.payload) % action.payload;
    },
    setSlide: (state, action: PayloadAction<number>) => {
      state.current = action.payload;
    },
  },
});

export const { nextSlide, previousSlide, setSlide } = slideSlice.actions;
export default slideSlice.reducer;
