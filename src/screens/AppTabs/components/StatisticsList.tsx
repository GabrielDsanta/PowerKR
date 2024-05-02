import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Circle, Svg } from "react-native-svg";

import colors from "styles/colors";
import fonts from "styles/fonts";

export const StatisticsList: FC = () => {
  const maxProgress = 10000;

  const circleRadius = 55;
  const circleCircumference = 2 * Math.PI * circleRadius;

  return (
    <View style={styles.container}>
      <Text style={styles.mediumText}>Métricas</Text>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          flexShrink: 1,
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {mockData.map((item) => {
          const progressPercentage = (item.staticProgress / maxProgress) * 78;
          const progressOffset =
            circleCircumference * (1 - progressPercentage / 100);

          return (
            <View key={item.id} style={styles.statisticCard}>
              <Svg height="125" width="125">
                <Circle
                  cx="60"
                  cy="60"
                  r={circleRadius}
                  stroke={colors.blue100}
                  strokeWidth="10"
                  fill="transparent"
                  strokeDasharray="270"
                  transform="rotate(-230 60 60)"
                  strokeLinecap="round"
                />

                <Circle
                  cx="60"
                  cy="60"
                  r={circleRadius}
                  stroke="#44CB4B"
                  strokeWidth="10"
                  strokeDasharray={`${circleCircumference}`}
                  strokeDashoffset={`${progressOffset}`}
                  strokeLinecap="round"
                  fill="transparent"
                  transform="rotate(-230 60 60)"
                />

                <View
                  style={{
                    position: "absolute",
                    alignSelf: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "25%",
                    left: 20,
                  }}
                >
                  <Text style={styles.boldText}>{item.staticProgress}</Text>
                  <Text style={styles.regularText}>{item.staticName}</Text>
                </View>
              </Svg>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: "35%",
  },
  statisticCard: {
    width: "47%",
    borderRadius: 20,
    backgroundColor: colors.blue400,
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  boldText: {
    ...fonts.boldFont,
    fontSize: 16,
  },
  regularText: {
    ...fonts.regularFont,
    fontSize: 12,
    color: colors.gray200,
    width: 80,
    textAlign: "center",
  },
  mediumText: {
    ...fonts.MediumFont,
    color: colors.gray200,
    fontSize: 14,
    marginTop: 20,
    marginBottom: 10,
  },
});

const mockData = [
  {
    id: "1",
    staticName: "Assumidos",
    staticProgress: 7123,
  },
  {
    id: "2",
    staticName: "Realizados",
    staticProgress: 7123,
  },
  {
    id: "3",
    staticName: "Pontos",
    staticProgress: 7123,
  },
  {
    id: "4",
    staticName: "Pontuação Média",
    staticProgress: 7123,
  },
  {
    id: "5",
    staticName: "Execução",
    staticProgress: 7123,
  },
  {
    id: "6",
    staticName: "Desempenho Médio",
    staticProgress: 7123,
  },
];
