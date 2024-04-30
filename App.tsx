import "react-native-reanimated";

import React from "react";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { Loading } from "./src/components";

import configureStore from "./src/redux/store/configureStore";
import Routes from "./src/Routes";

const queryClient = new QueryClient();

const store = configureStore();

export default function App() {
  const [fontsLoadead] = useFonts(fonts);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <StatusBar style="light" />
          {fontsLoadead ? <Routes /> : <Loading />}
        </QueryClientProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

const fonts = {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
};
