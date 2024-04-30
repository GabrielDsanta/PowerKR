import { FC, useRef, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "hooks/useAuth";
import { Formik } from "formik";
import { Input } from "components/Input";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "Routes";

import PowerKR from "@assets/PowerKRLogoSVG.svg";
import Sponsors from "@assets/SponsorsLogoSVG.svg";

import colors from "styles/colors";
import fonts from "styles/fonts";

import * as yup from "yup";

const { height } = Dimensions.get("window");

const signInValidation = yup.object().shape({
  email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "A senha deve possuir no mínimo 6 dígitos"),
});

export const SignIn: FC = () => {
  const navigation = useNavigation<AppNavigationRoutesProps>();

  const { signin } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { success } = await signin(email, password);
      if (success) {
        navigation.navigate("AppTabs");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      ref={scrollViewRef}
      style={{ flex: 1 }}
    >
      <ImageBackground
        style={styles.container}
        source={require("@assets/RocketBackgroundImage.png")}
      >
        <View style={styles.containerImages}>
          <PowerKR />
          <Sponsors />
        </View>

        <View style={styles.containerTexts}>
          <Text style={styles.boldText}>Bem-vindo de volta!</Text>
          <Text style={styles.regularText}>
            Preparado para mais uma jornada?
          </Text>
        </View>

        <Formik
          validationSchema={signInValidation}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values: { email: string; password: string }) =>
            handleLogin(values.email, values.password)
          }
        >
          {({ handleChange, values, errors, handleSubmit }) => {
            return (
              <View style={styles.containerInsertData}>
                <Input
                  label="Informações da conta"
                  onChangeText={handleChange("email")}
                  value={values["email" as keyof typeof values]}
                  errorMessage={errors["email" as keyof typeof values]}
                  placeholder="Inisra seu e-mail"
                />

                <Input
                  isPassword
                  label="Senha"
                  onChangeText={handleChange("password")}
                  value={values["password" as keyof typeof values]}
                  errorMessage={errors["password" as keyof typeof values]}
                  placeholder="Senha"
                />

                <View style={styles.containerForgotPassowrd}>
                  <TouchableOpacity>
                    <Text style={styles.forgorPasswordTextStyles}>
                      Esqueceu a senha?
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  disabled={isLoading}
                  onPress={() => handleSubmit()}
                  style={styles.submitButton}
                >
                  <Text style={styles.semiBoldText}>Entrar</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </Formik>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
  },
  containerImages: {
    height: "45%",
    alignItems: "center",
    gap: 25,
    justifyContent: "center",
  },
  containerTexts: {
    width: "100%",
    paddingHorizontal: 20,
  },
  containerInsertData: {
    width: "100%",
    backgroundColor: colors.primary,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    marginTop: 15,
    flex: 1,
  },
  containerForgotPassowrd: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 5,
  },
  forgorPasswordTextStyles: {
    ...fonts.regularFont,
    color: colors.secondary,
  },
  submitButton: {
    width: "100%",
    borderRadius: 10000,
    backgroundColor: colors.secondary,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  boldText: {
    ...fonts.boldFont,
    color: "white",
    fontSize: 26,
  },
  semiBoldText: {
    ...fonts.semiBoldFont,
    color: "black",
    fontSize: 16,
  },
  regularText: {
    ...fonts.regularFont,
    color: colors.gray100,
    fontSize: 12,
    marginTop: 5,
    marginBottom: 10,
  },
});
