import { RootState } from "./../store/store";
import { initialState } from "./weatherSlice";
import { createSelector } from "@reduxjs/toolkit";

const makeSelectWeatherSlice = (state: RootState) =>
  state?.weather || initialState;

const makeSelectWeatherData = createSelector(
  [makeSelectWeatherSlice],
  (state) => state.weatherData
);
const makeSelectIsloading = createSelector(
  [makeSelectWeatherSlice],
  (state) => state.isLoading
);
const makeSelectErrorMessage = createSelector(
  [makeSelectWeatherSlice],
  (state) => state.errorMessage
);
const makeSelectCityName = createSelector(
  [makeSelectWeatherSlice],
  (state) => state.cityName
);

export {
  makeSelectCityName,
  makeSelectErrorMessage,
  makeSelectIsloading,
  makeSelectWeatherData,
};
