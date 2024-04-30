import React, { FC } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./Home";
import { Host } from "react-native-portalize";
import { BottomTab } from "components/BottomTab";

const Tab = createBottomTabNavigator();

export const AppTabs: FC<{}> = () => {
  return (
    <Host>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "red"
          }
        }}
        tabBar={(props) => <BottomTab {...props} />}
        initialRouteName="Home"
      >
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </Host>
  );
};
