import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Location from "expo-location";
import Header from "../components/Header";
import CurrentWeather from "../components/CurrentWeather";
import { Searchbar } from "react-native-paper";
import { useAppDispatch } from "../store/hooks";
import {
  fetchWeatherDataByCoord,
  fetchWeatherData,
  setCityName,
} from "../slices/weatherSlice";

interface HomeProps {}

export default function Home(props: HomeProps) {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      dispatch(
        fetchWeatherDataByCoord({
          long: location.coords.longitude,
          lat: location.coords.latitude,
        })
      );
      let currentLocationInfo = await Location.reverseGeocodeAsync({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      });
      dispatch(setCityName(currentLocationInfo));
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <CurrentWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
