import React, { FC, useState } from "react";

import { AntDesign, Feather } from "@expo/vector-icons";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import colors from "styles/colors";
import fonts from "styles/fonts";

const { height } = Dimensions.get("window");

export const Home: FC<{ navigation: any }> = ({ navigation }) => {


  return (
    <View style={styles.containerMain}>

    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: "center",
  },
});
