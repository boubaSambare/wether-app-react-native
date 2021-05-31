import * as React from "react";
import {
  Platform,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
} from "react-native";
import Waveborder from "./Waveborder";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";
import { weatherIcons, icons, kelvinToCelcius, getDayString } from "../utils";
import {
  Ionicons,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { makeSelectWeatherData } from "../slices/selectors";
import { isEmpty } from "lodash";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  forecastContent: {
    marginTop: 50,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  dayText: {
    fontSize: 20,
  },
  dayContainer: {
    padding: 30,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  tempIcon: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "nowrap",
    width: 100,
  },
  icon: {
    width: 35,
    height: 35,
  },
});

const Forecast = () => {
  const weatherData = useAppSelector(makeSelectWeatherData);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.forecastContent}>
          {!isEmpty(weatherData) &&
            weatherData?.daily.map((data, i) => (
              <View key={i} style={styles.dayContainer}>
                <View>
                  <Text style={styles.dayText}>{getDayString(data.dt)}</Text>
                </View>
                <View style={styles.tempIcon}>
                  <View>
                    <Text style={styles.dayText}>
                      {kelvinToCelcius(data.temp.day)}&#8451;
                    </Text>
                  </View>
                  <View style={styles.dayText}>
                    <Image
                      style={styles.icon}
                      source={icons[`i${data.weather[0].icon}`]}
                    />
                  </View>
                </View>
              </View>
            ))}
        </View>
      </View>
    </>
  );
};

export default Forecast;
