import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { API_URL } from "../config";

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

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchalldata",
  async (queryString: string, { rejectWithValue }) => {
    try {
      const request = await fetch(`${API_URL}/weather?name=${queryString}`);
      return await request.json();
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const fetchimagesData = createAsyncThunk(
  "images/fetchalldata",
  async (queryString: string, { rejectWithValue }) => {
    try {
      const request = await fetch(`${API_URL}/unsplast?name=${queryString}`);
      return await request.json();
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",

  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWeatherData.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
    builder.addCase(fetchimagesData.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchimagesData.fulfilled, (state, { payload }) => {
      state.cityImages = payload;
    });
  },
});

export const {
  setCityImages,
  setData,
  setIsloading,
  unSetIsloading,
} = weatherSlice.actions;

export default weatherSlice.reducer;
