import { api } from "boot/axios";

class ApiUserService {
  static async getUsers() {
    const response = await api.get("/api/users");
    console.log("users response:", response);
    return response.data.content;
  }

  static async getUser(id) {
    console.log("id:",id)
    const response = await api.get(`/api/users/${id}`);
    console.log("user response:", response);
    return response.data.content;
  }
}

export default ApiUserService;
