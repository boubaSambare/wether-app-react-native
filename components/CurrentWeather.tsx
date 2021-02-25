import * as React from "react";
import { Card, Title } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
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
interface ICurrentWeatherProps {}

export default function CurrentWeather(props: ICurrentWeatherProps) {
  const weatherData = useAppSelector((state: RootState) => state.weather.data);
  const currentCityName = useAppSelector(
    (state: RootState) => state.weather.cityName
  );
  const _weatherIcon = weatherIcons.find(
    (element) => element.keyIcon === weatherData.daily[0].weather[0].icon
  );
  console.log(_weatherIcon);

  return (
    <>
      {!!weatherData && (
        <Card style={styles.container}>
          <View style={styles.icon}>
            <Title>{`${currentCityName[0]?.city} (${currentCityName[0]?.country})`}</Title>
          </View>
          <View style={styles.icon}>
            <Text>{weatherData.daily[0].weather[0].main}</Text>
          </View>
          <View style={styles.icon}>
            {_weatherIcon?.provider === "Ionicons" && (
              <Ionicons
                name={`${_weatherIcon?.icon}`}
                size={100}
                color="black"
              />
            )}
            {_weatherIcon?.provider === "FontAwesome5" && (
              <FontAwesome5
                name={`${_weatherIcon?.icon}`}
                size={100}
                color="black"
              />
            )}
            {_weatherIcon?.provider === "Feather" && (
              <Feather
                name={`${_weatherIcon?.icon}`}
                size={100}
                color="black"
              />
            )}
            {_weatherIcon?.provider === "MaterialCommunityIcons" && (
              <MaterialCommunityIcons
                name={`${_weatherIcon?.icon}`}
                size={100}
                color="black"
              />
            )}
          </View>
          <View style={styles.icon}>
            <Title>
              {" "}
              {Math.floor(weatherData.daily[0].temp.day - 273)} &#8451;
            </Title>
          </View>
        </Card>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
  icon: {
    justifyContent: "center",
    flexDirection: "row",
  },
});
