import { Local } from "./Local";

import axios from "axios";
import host from "@utils/host";

export class AuthService {
  static async signIn(email: string, password: string) {
    const url = `${host()}/mobile/patient/auth/signin`;
    try {
      const response = await axios.post(
        url,
        { login: email, password },
        {
          headers: {
            accept: "*/*",
          },
        }
      );

      if (response.status === 200) {
        return { data: response.data, success: true };
      } else {
        return {
          error: response.data.message,
          success: false,
        };
      }
    } catch (error: any) {
      if (error.response.data.error)
        return {
          error: error.response.data.error,
          success: false,
        };

      return {
        error: "Erro ao logar usuário",
        success: false,
      };
    }
  }

  static async getAxiosInstance() {
    const jwt = await Local.get("JWT");

    return axios.create({
      baseURL: `${host()}`,
      headers: {
        "Content-Type": "application/json",
        "x-access-token": jwt,
      },
    });
  }
}
