import React, { FC } from "react";

import { FlatList, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  HomeHeader,
  StatisticsList,
  TaskCard,
  UserDataCard,
} from "./components";

import colors from "styles/colors";
import fonts from "styles/fonts";

export const Home: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <UserDataCard />

        <Text style={styles.titleFlatList}>Compromissos homologados</Text>
        <FlatList
          data={mockData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard
              priority={item.priority}
              key={item.id}
              createdAt={item.createdAt}
              title={item.title}
            />
          )}
        />

        <StatisticsList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },
  titleFlatList: {
    ...fonts.MediumFont,
    color: colors.gray200,
    fontSize: 14,
    marginBottom: 15,
  },
});

const mockData = [
  {
    id: "1",
    createdAt: new Date(),
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, numquam modi repellendus tempore soluta cum quae maiores veritatis",
    priority: "High",
  },
  {
    id: "2",
    createdAt: new Date(),
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, numquam modi repellendus tempore soluta cum quae maiores veritatis",
    priority: "Medium",
  },
  {
    id: "3",
    createdAt: new Date(),
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, numquam modi repellendus tempore soluta cum quae maiores veritatis",
    priority: "Low",
  },
];
