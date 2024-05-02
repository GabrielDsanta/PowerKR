import React, { FC } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  Ionicons,
  Octicons,
  FontAwesome5,
} from "@expo/vector-icons";
import { AppTabsRoutesNavigationRoutesProps } from "screens/AppTabs";

import colors from "../styles/colors";
import fonts from "styles/fonts";

type RouteNames = "Home" | 'Profile';

const isAndroid = Platform.OS === "android";

export const BottomTab: FC<BottomTabBarProps> = ({ state }) => {
  const navigation = useNavigation<AppTabsRoutesNavigationRoutesProps>();

  const bottomTabButtons = [
    {
      id: "1",
      label: "Home",
      component: (
        <Octicons
          name="home"
          color={state.index === 0 ? "white" : colors.gray200}
          size={28}
        />
      ),
      route: "Home",
    },
    {
      id: "2",
      label: "Compromissos",
      component: (
        <MaterialCommunityIcons
          color={state.index === 1 ? "white" : colors.gray200}
          name="align-vertical-top"
          size={28}
        />
      ),
      route: "Home1",
    },
    {
      id: "3",
      label: "Comitês",
      component: (
        <Ionicons
          color={state.index === 2 ? "white" : colors.gray200}
          name="chatbubble-ellipses-outline"
          size={28}
        />
      ),
      route: "Home2",
    },
    {
      id: "4",
      label: "Perfil",
      component: (
        <FontAwesome5
          color={state.index === 3 ? "white" : colors.gray200}
          name="user-circle"
          size={28}
        />
      ),
      route: "Profile",
    },
  ];

  return (
    <View style={styles.container}>
      {bottomTabButtons.map((button, index) => {
        return (
          <TouchableOpacity
            key={button.id}
            onPress={() => navigation.navigate(button.route as RouteNames)}
          >
            <View style={styles.containerIconStyles}>
              {button.component}
              <Text style={styles.labelTextStyles}>{button.label}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    height: "12%",
    backgroundColor: colors.blue300,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    paddingHorizontal: 40,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

    position: "absolute",
    zIndex: 1,
    bottom: -1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: isAndroid ? 1 : 0.4,
    shadowRadius: 5,

    elevation: 10,
  },
  containerIconStyles: {
    alignItems: "center",
    justifyContent: "center",
  },
  labelTextStyles: {
    ...fonts.regularFont,
    color: colors.gray200,
    textAlign: "center",
    fontSize: 10,
    marginTop: 5,
  },
});
