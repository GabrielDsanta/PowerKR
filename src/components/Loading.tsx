import React, { FC } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
} from "react-native";

import PowerKR from "@assets/PowerKRLogoSVG.svg";
import Sponsors from "@assets/SponsorsLogoSVG.svg";

export const Loading: FC = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("@assets/RocketBackgroundImage.png")}
    >
      <PowerKR />
      <Sponsors />
      <ActivityIndicator style={styles.loadingStyles} color="white" size={50} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  loadingStyles: {
    marginTop: 50
  }
});
