import { Alert } from "react-native";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@redux/actions";
import { Local } from "services/Local";
import { AuthService } from "services/AuthService";

export const useAuth = () => {
  const dispatch = useDispatch();

  const signin = useCallback(async (email: string, password: string) => {
    const response = await AuthService.signIn(email, password);

    if (response.success) {
      dispatch(setUser(response.data.user));
      await Local.set("JWT", response.data.access_token);
      Alert.alert("Sucesso", "Usuário logado com sucesso!");
      return { success: true };
    }
    Alert.alert("Erro", response.error);
    return { success: false };
  }, []);

  return {
    signin
  };
};
