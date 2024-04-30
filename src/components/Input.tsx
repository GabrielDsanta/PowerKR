import React, { FC, useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

import Feather from "@expo/vector-icons/Feather";

import colors from "styles/colors";
import fonts from "styles/fonts";

interface InputProps extends TextInputProps {
  placeholder: string;
  isPassword?: boolean;
  errorMessage?: string;
  label: string;
}

export const Input: FC<InputProps> = ({
  label,
  placeholder,
  isPassword,
  errorMessage,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  return (
    <>
      <Text style={styles.labelStyles}>{label}</Text>
      <View style={[styles.containerTextInputStyles, errorMessage ? { borderColor: '#F2564B' } : undefined]}>
        <TextInput
          {...rest}
          secureTextEntry={isPassword ? isPasswordVisible : false}
          placeholder={placeholder}
          cursorColor="white"
          style={styles.textInputStyles}
          placeholderTextColor={colors.gray200}
        />

        {isPassword && (
          <TouchableOpacity
            style={styles.iconStyles}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <Feather name="eye" size={18} color={colors.gray100} />
            ) : (
              <Feather name="eye-off" size={18} color={colors.gray100} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    labelStyles: {
        ...fonts.MediumFont,
        color: colors.gray100
    },
  containerTextInputStyles: {
    width: "100%",
    backgroundColor: colors.blue100,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    borderWidth: 1,
    borderColor: colors.blue200,
    justifyContent: "center",
    marginBottom: 15,
    marginTop: 5,
  },
  textInputStyles: {
    ...fonts.regularFont,
  },
  iconStyles: {
    position: "absolute",
    right: 20,
  },
});
