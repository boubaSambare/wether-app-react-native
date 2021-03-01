import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform, StyleSheet, View } from "react-native";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
const MARGIN_CITY = Platform.OS === "android" ? 70 : "auto";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
  opacity: {
    backgroundColor: "#192B43",
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

  return (
    <>
      <View style={styles.opacity}>
        <Appbar.Header style={styles.container}>
          <Appbar.Action icon="menu" onPress={() => {}} color="white" />
          {currentCityName && (
            <Appbar.Content
              title={currentCityName[0].city}
              color="white"
              style={{ marginLeft: MARGIN_CITY }}
            />
          )}
          <Appbar.Action icon={MORE_ICON} onPress={() => {}} color="white" />
        </Appbar.Header>
      </View>
    </>
  );
};

export default Header;
