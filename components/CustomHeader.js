import React from "react";
import { Header } from "react-navigation";
import { View, Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const CustomHeader = props => {
  return (
    <View
      style={{
        height: 56,
        marginTop: Platform.OS == "ios" ? 20 : 0 
      }}
    >
      <LinearGradient
        colors={["#6200EE", "#3700B3"]}
      >
        <Header {...props} />
      </LinearGradient>
    </View>
  );
};

export default CustomHeader;
