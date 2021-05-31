import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import * as Location from "expo-location";
import Header from "../components/Header";
import CurrentWeather from "../components/CurrentWeather";
import { Searchbar } from "react-native-paper";
import { useAppDispatch } from "../store/hooks";
import { useAppSelector } from "../store/hooks";
import {
  fetchWeatherDataByCoord,
  fetchWeatherData,
  setCityName,
} from "../slices/weatherSlice";
import Forecast from "../components/Forecast";

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

      let cityCoordinates = await Location.getCurrentPositionAsync({});
      dispatch(
        fetchWeatherDataByCoord({
          long: cityCoordinates.coords.longitude,
          lat: cityCoordinates.coords.latitude,
        })
      );
      // to get current city infos
      let getCityNameByCoord = await Location.reverseGeocodeAsync({
        longitude: cityCoordinates.coords.longitude,
        latitude: cityCoordinates.coords.latitude,
      });
      dispatch(setCityName(getCityNameByCoord));
    })();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <CurrentWeather />
        <Forecast />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
