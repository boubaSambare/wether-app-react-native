import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform, StyleSheet, View,ActivityIndicator } from "react-native";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";
import Color from "../constants/color";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
  opacity: {
    backgroundColor: Color.backgroundColor,
    opacity: 0.7,
  },
  textColor: {
    color: "white",
  },
});

const Header: React.FC = () => {
  const currentCityName = useAppSelector(
    (state: RootState) => state.weather.cityName
  );
  const isLoading = useAppSelector(
    (state: RootState) => state.weather.isLoading
  );
  

  return (
    <>
      <View style={styles.opacity}>
        <Appbar.Header style={styles.container}>
          <Appbar.Action icon="menu" onPress={() => {}} color="white" />
          {currentCityName && (
            <Appbar.Content
              title={currentCityName[0].city}
              color="white"
              style={{ alignItems:"center" }}
            />
          )}
          {isLoading && <ActivityIndicator size="small" color="green"/>}
          <Appbar.Action icon={MORE_ICON} onPress={() => {}} color="white" />
        </Appbar.Header>
      </View>
    </>
  );
};

export default Header;
