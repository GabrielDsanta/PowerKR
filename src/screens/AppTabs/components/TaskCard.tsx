import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { formatDate } from "@utils/formatDate";
import { getPriorityColor } from "@utils/getPriorityColor";

import colors from "styles/colors";
import fonts from "styles/fonts";

interface TaskCardProps {
  createdAt: Date;
  title: string;
  priority: string;
}

export const TaskCard: FC<TaskCardProps> = ({ createdAt, title, priority }) => {

  const getCurrentPriority = () => {
    return (
      <View
        style={[
          styles.containerPriority,
          { backgroundColor: getPriorityColor(priority)!.background },
        ]}
      >
        {priority === "High" && (
          <AntDesign
            name="up"
            size={16}
            color={getPriorityColor(priority)!.color}
          />
        )}

        {priority === "Medium" && (
          <Ionicons
            name="remove-outline"
            size={16}
            color={getPriorityColor(priority)!.color}
          />
        )}

        {priority === "Low" && (
          <AntDesign
            name="down"
            size={16}
            color={getPriorityColor(priority)!.color}
          />
        )}
        <Text
          style={[
            styles.mediumText,
            { color: getPriorityColor(priority)!.color },
          ]}
        >
          {priority}
        </Text>
      </View>
    );
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Text numberOfLines={2} style={[styles.mediumText, { width: 210 }]}>
        Compromisso Título {title}
      </Text>

      <View style={styles.containerTaskDetails}>
        <Ionicons
          name="chatbubble-ellipses-outline"
          size={18}
          color={colors.secondary}
        />
        <View style={styles.line}>
          <Feather name="calendar" size={18} color={colors.gray200} />
          <Text style={styles.regularText}>{formatDate(createdAt)}</Text>
        </View>

        {getCurrentPriority()}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 130,
    backgroundColor: colors.blue400,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    paddingHorizontal: 10
  },
  containerTaskDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 15,
    paddingHorizontal: 10
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  containerPriority: {
    width: 'auto',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    borderRadius: 10000,
    paddingHorizontal: 10,
    height: 25
  },
  regularText: {
    ...fonts.regularFont,
    fontSize: 14,
    color: colors.gray200,
  },
  mediumText: {
    ...fonts.MediumFont,
    fontSize: 14
  },
});
