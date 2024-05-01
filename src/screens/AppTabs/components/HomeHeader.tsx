import React, { FC, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";

import colors from "styles/colors";
import fonts from "styles/fonts";

export const HomeHeader: FC = () => {
  const [currentDataType, setCurrentDataType] = useState("personal");

  return (
    <View style={styles.header}>
      <View style={styles.containerLineHeaderStyles}>
        <TouchableOpacity>
          <Feather name="menu" size={24} color={colors.gray100} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather name="bell" size={24} color={colors.gray100} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerLineHeaderStyles}>
        <Text style={styles.mediumText}>Olá, [usuário]</Text>
      </View>

      <View style={styles.containerLineHeaderStyles}>
        <TouchableOpacity
          onPress={() => setCurrentDataType("personal")}
          style={
            currentDataType === "personal"
              ? styles.buttonDataTypeRadio
              : styles.disableButtonDataTypeRadio
          }
        >
          <FontAwesome5
            name="user-circle"
            size={18}
            color={currentDataType === "personal" ? "white" : colors.gray100}
          />
          <Text
            style={[
              styles.semiboldText,
              currentDataType === "general" && { color: colors.gray100 },
            ]}
          >
            Pessoal
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCurrentDataType("general")}
          style={
            currentDataType === "general"
              ? styles.buttonDataTypeRadio
              : styles.disableButtonDataTypeRadio
          }
        >
          <Ionicons
            name="pie-chart-outline"
            size={18}
            color={currentDataType === "general" ? "white" : colors.gray100}
          />
          <Text
            style={[
              styles.semiboldText,
              currentDataType === "personal" && { color: colors.gray100 },
            ]}
          >
            Geral
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    marginTop: 25,
  },
  containerLineHeaderStyles: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  buttonDataTypeRadio: {
    width: "49%",
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: colors.blue200,
    backgroundColor: colors.blue400,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: 40,
  },
  disableButtonDataTypeRadio: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: 40,
  },
  mediumText: {
    ...fonts.MediumFont,
    fontSize: 20,
  },
  semiboldText: {
    ...fonts.semiBoldFont,
    fontSize: 16,
  },
});
