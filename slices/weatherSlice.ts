import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface IWeatherState {
  data: {} | null;
  isLoading: boolean;
  cityImages: {} | null;
}

const initialState: IWeatherState = {
  data: null,
  isLoading: false,
  cityImages: null,
};

export const weatherSlice = createSlice({
  name: "weather",

  initialState,
  reducers: {
    setData: (state, action: PayloadAction<number>) => {
      state.data = action.payload;
    },
    setIsloading: (state) => {
      state.isLoading = true;
    },
    unSetIsloading: (state) => {
      state.isLoading = false;
    },

    setCityImages: (state, action: PayloadAction<number>) => {
      state.cityImages = action.payload;
    },
  },
});

export const {
  setCityImages,
  setData,
  setIsloading,
  unSetIsloading,
} = weatherSlice.actions;

export default weatherSlice.reducer;
