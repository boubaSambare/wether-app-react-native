import * as React from "react";
import { Card, Title } from "react-native-paper";
import { StyleSheet, View, Text, Dimensions,ActivityIndicator } from "react-native";
import Waveborder from "./Waveborder";
import { useAppSelector } from "../store/hooks";
import { IWeatherState } from "../slices/weatherSlice";
import { RootState } from "../store/store";
import {
  Ionicons,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { weatherIcons } from "../utils";
import Color from "../constants/color";
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.backgroundColor,
    opacity: 0.7,
    borderRadius: 0,
    height: height / 2,
  },
  icon: {
    justifyContent: "center",
    flexDirection: "row",
  },
  textColor: {
    color: "white",
  },
  svgCurve: {
    width: Dimensions.get("window").width,
    position: "absolute",
    top: height / 2,
  },
});

interface ICurrentWeatherProps {}

export default function CurrentWeather(props: ICurrentWeatherProps) {
  const weatherData = useAppSelector((state: RootState) => state.weather.data);
  const currentCityName = useAppSelector(
    (state: RootState) => state.weather.cityName
  );
  const isLoading = useAppSelector(
    (state: RootState) => state.weather.isLoading
  );
  const _weatherIcon = weatherIcons.find(
    (element) => element.keyIcon === weatherData?.daily[0]?.weather[0]?.icon
  );

  return (
    <>
     {isLoading && <ActivityIndicator/>}
      {!!weatherData && (
        <Card style={styles.container}>
          <View style={styles.icon}>
            <Text style={styles.textColor}>
              {weatherData.daily[0].weather[0].main}
            </Text>
          </View>
          <View style={styles.icon}>
            {_weatherIcon?.provider === "Ionicons" && (
              <Ionicons
                name={`${_weatherIcon?.icon}`}
                size={100}
                color="white"
              />
            )}
            {_weatherIcon?.provider === "FontAwesome5" && (
              <FontAwesome5
                name={`${_weatherIcon?.icon}`}
                size={100}
                color="white"
              />
            )}
            {_weatherIcon?.provider === "Feather" && (
              <Feather
                name={`${_weatherIcon?.icon}`}
                size={100}
                color="white"
              />
            )}
            {_weatherIcon?.provider === "MaterialCommunityIcons" && (
              <MaterialCommunityIcons
                name={`${_weatherIcon?.icon}`}
                size={100}
                color="white"
              />
            )}
          </View>
          <View style={styles.icon}>
            <Title style={styles.textColor}>
              {" "}
              {Math.floor(weatherData.daily[0].temp.day - 273)} &#8451;
            </Title>
          </View>
          <Waveborder customStyles={styles.svgCurve} />
        </Card>
      )}
    </>
  );
}
