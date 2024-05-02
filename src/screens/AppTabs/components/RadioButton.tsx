import React, { FC, useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from "react-native-reanimated";

import colors from "styles/colors";
import fonts from "styles/fonts";

interface RadioButtonProps {
    title: string;
}

export const RadioButton: FC<RadioButtonProps> = ({ title }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const translateX = useSharedValue(0);

  const toggleNotificationSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    translateX.value = withSequence(
      withSpring(0, { stiffness: 100, damping: 10 }),
      withSpring(isEnabled ? 0 : 1, { stiffness: 100, damping: 10 })
    );
  };

  const thumbDarkModeStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value * 30 }],
    };
  });

  return (
    <View style={styles.profileOptionButton}>
      <Text style={[styles.regularFont, { color: colors.gray100 }]}>
        {title}
      </Text>

      <TouchableWithoutFeedback onPress={toggleNotificationSwitch}>
        <View>
          <View style={[styles.track, { backgroundColor: "#F7B519" }]}>
            <Animated.View
              style={[
                styles.thumb,
                thumbDarkModeStyle,
                { marginLeft: isEnabled ? 0 : 5 },
              ]}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  profileOptionButton: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
  },
  track: {
    width: 55,
    height: 25,
    borderRadius: 15,
    justifyContent: "center",
    position: "relative",
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: "white",
    position: "absolute",
    left: 0,
  },
  regularFont: {
    ...fonts.regularFont,
    color: colors.gray200,
    fontSize: 14,
  },
});
