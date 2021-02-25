import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform } from "react-native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const Header = () => (
  <Appbar.Header>
    <Appbar.Content title="Yoo Meteo" subtitle={"stay tuned"} />
    <Appbar.Action icon="magnify" onPress={() => {}} />
    <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
  </Appbar.Header>
);

export default Header;
