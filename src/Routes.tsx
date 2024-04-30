import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "screens";
import { AppTabs } from "screens/AppTabs";

import colors from "styles/colors";

type AppRoutesType = {
  SignIn: undefined;
  AppTabs: undefined;
}

export type AppNavigationRoutesProps = NativeStackNavigationProp<AppRoutesType>

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.background,
          },
          gestureEnabled: false,
        }}
        initialRouteName="SplashScreen"
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="AppTabs" component={AppTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
