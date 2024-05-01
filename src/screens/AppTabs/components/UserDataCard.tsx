import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "styles/colors";
import fonts from "styles/fonts";

export const UserDataCard: FC = () => {
  return (
    <View style={styles.containerUserInfo}>
      <Image style={styles.userImageStyles} source={{ uri: imageUri }} />
      <View>
        <Text style={styles.mediumText}>Colaborador nome</Text>
        <Text style={styles.regularText}>Empresa</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerUserInfo: {
    width: "100%",
    backgroundColor: colors.blue400,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    height: 130,
    padding: 20,
    marginBottom: 25,
  },
  userImageStyles: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    marginRight: 15,
  },
  mediumText: {
    ...fonts.MediumFont,
    fontSize: 16,
  },
  regularText: {
    ...fonts.regularFont,
    color: colors.gray200,
    fontSize: 14,
    marginTop: 5,
  },
});

const imageUri =
  "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
