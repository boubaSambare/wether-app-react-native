import  React,{useEffect} from "react";
import { Card, Title } from "react-native-paper";
import { StyleSheet, View, Text, Dimensions,ActivityIndicator ,Platform,Image} from "react-native";
import Waveborder from "./Waveborder";
import * as SplashScreen from 'expo-splash-screen';
import { useAppSelector } from "../store/hooks";
import { IWeatherState } from "../slices/weatherSlice";
import { RootState } from "../store/store";
import { weatherIcons,kelvinToCelcius,icons } from "../utils";
import Color from "../constants/color";
const { height } = Dimensions.get("window");
const CURVE_BORDER = Platform.OS === "ios" ? "34.7%" : "32.7%";

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
    top: CURVE_BORDER,
    zIndex:1
  },
  wrapper: {
    flexDirection: "column",
    justifyContent:"space-evenly"
  },
  iconImage: {
    width:60,
    height:60
  }
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
     {isLoading && <ActivityIndicator  size="small" color="green"/>}
      {!!weatherData && (
       <>
        <Card style={styles.container}>
          <View style={styles.icon}>
            <Text style={styles.textColor}>
              {weatherData.daily[0].weather[0].main}
            </Text>
          </View>
          <View style={styles.icon}>
          <Image style={styles.iconImage} source={icons[`i${weatherData.daily[0].weather[0].icon}`]} />
          </View>
          <View style={styles.icon}>
            <Title style={styles.textColor}>
              {" "}
              {kelvinToCelcius(weatherData.daily[0].temp.day )} &#8451;
            </Title>
          </View>
         
        </Card>
         <Waveborder customStyles={styles.svgCurve} />
         </>
      )}
     
  
    </>
  );
}
