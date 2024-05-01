import React, { FC } from "react";

import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Home } from "./Home";
import { Host } from "react-native-portalize";
import { BottomTab } from "components/BottomTab";
import { Profile } from "./Profile";

type AppRoutesType = {
  Home: undefined;
  Profile: undefined;
};

export type AppTabsRoutesNavigationRoutesProps =
  BottomTabNavigationProp<AppRoutesType>;

const Tab = createBottomTabNavigator();

export const AppTabs: FC<{}> = () => {
  return (
    <Host>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <BottomTab {...props} />}
        initialRouteName="Home"
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Home1" component={Home} />
        <Tab.Screen name="Home2" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </Host>
  );
};
