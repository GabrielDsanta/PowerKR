import React, { FC } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, AntDesign } from "@expo/vector-icons";
import { RadioButton } from "./components";
import { Local } from "services/Local";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "Routes";

import colors from "styles/colors";
import fonts from "styles/fonts";

export const Profile: FC = () => {
  const navigation = useNavigation<AppNavigationRoutesProps>();

  const handleLogout = () => {
    navigation.navigate("SignIn");
    Local.logout();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerProfile}>
          <TouchableOpacity>
            <Feather name="menu" size={24} color={colors.gray100} />
          </TouchableOpacity>

          <Text style={[styles.mediumFont, { fontSize: 20, marginRight: 20 }]}>
            Perfil
          </Text>

          <View></View>
        </View>

        <Image style={styles.imageStyles} source={{ uri: imageUri }} />
        <Text style={styles.mediumFont}>Colaborador nome</Text>
        <Text style={styles.lightFont}>Departamento</Text>

        <TouchableOpacity style={styles.profileOptionButton}>
          <Text style={[styles.regularFont, { color: colors.gray100 }]}>
            Nome
          </Text>

          <View style={styles.line}>
            <Text style={styles.regularFont}>Nome Completo</Text>
            <AntDesign name="right" size={24} color={colors.gray200} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileOptionButton}>
          <Text style={[styles.regularFont, { color: colors.gray100 }]}>
            E-mail
          </Text>

          <View style={styles.line}>
            <Text style={styles.regularFont}>nome.sobrenome@gmail.com</Text>
            <AntDesign name="right" size={24} color={colors.gray200} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileOptionButton}>
          <Text style={[styles.regularFont, { color: colors.gray100 }]}>
            Alterar senha
          </Text>

          <View>
            <AntDesign name="right" size={24} color={colors.gray200} />
          </View>
        </TouchableOpacity>

        <RadioButton title="Notificações" />
        <RadioButton title="Modo Noturno" />

        <TouchableOpacity style={[styles.helpAndLogoutButtonStyles, { marginTop: 10 }]}>
          <Feather name="help-circle" size={20} color="white" />
          <Text style={styles.semiBoldFont}>Ajuda</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogout} style={[styles.helpAndLogoutButtonStyles, { marginBottom: '30%' }]}>
          <Feather name="power" size={20} color="white" />
          <Text style={styles.semiBoldFont}>Sair</Text>
        </TouchableOpacity>
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
  headerProfile: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  imageStyles: {
    width: 160,
    height: 160,
    borderRadius: 1000,
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 15,
  },
  profileOptionButton: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  helpAndLogoutButtonStyles: {
    width: "100%",
    borderRadius: 1000,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue400,
    borderWidth: 1,
    borderColor: colors.blue200,
    height: 40,
    gap: 8,
    marginBottom: 15,
  },
  semiBoldFont: {
    ...fonts.semiBoldFont,
    fontSize: 16,
  },
  regularFont: {
    ...fonts.regularFont,
    color: colors.gray200,
    fontSize: 14,
  },
  mediumFont: {
    ...fonts.MediumFont,
    alignSelf: "center",
    fontSize: 18,
  },
  lightFont: {
    ...fonts.lightFont,
    color: colors.gray200,
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 15,
  },
});

const imageUri =
  "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
