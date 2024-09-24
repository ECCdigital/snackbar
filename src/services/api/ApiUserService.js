import { api } from "boot/axios";

class ApiUserService {
  static async getUsers() {
    const response = await api.get("/api/users");
    return response.data.content;
  }

  static async getUser(id) {
    const response = await api.get(`/api/users/${id}`);
    return response.data.content;
  }
}

export default ApiUserService;
