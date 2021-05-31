import React from "react";
import { View, StyleProp, Platform, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
const { width, height } = Dimensions.get("window");

const SVG_HEIGHT = Platform.OS === "ios" ? 180 : 160;

export default function Waveborder({ customStyles }) {
  return (
      <View
        style={{
          backgroundColor: "transparent",
          height: SVG_HEIGHT,
          width: width,
          alignSelf: "stretch",
          ...customStyles
        }}
      >
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          height="100%"
          width={width}
  
          style={{opacity:0.8}}
        >
          <Path
            fill="rgb(25, 43, 67,0.7)"
            fill-opacity="0.7"
            d="M0,192L48,170.7C96,149,192,107,288,117.3C384,128,480,192,576,202.7C672,213,768,171,864,138.7C960,107,1056,85,1152,112C1248,139,1344,213,1392,250.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></Path>
        </Svg>
      </View>
   
  );
}
