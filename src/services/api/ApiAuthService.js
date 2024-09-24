import { api } from "boot/axios";

class ApiAuthService {
  static async login(user) {
    const response = await api.post("/auth/login", user);
    return response.data.content;
  }

  static async logout() {
    const response = await api.post("/auth/logout");
    return response.data.content;
  }

  static async me() {
    const response = await api.get("/auth/me");
    return response.data.content;
  }
}

export default ApiAuthService;
