import { api } from "boot/axios";

class ApiAudioService {
  static async getAudioItems() {
    const response = await api.get("/api/audio");
    return response.data.content.audioItems;
  }

  static async getAudioItem(id) {
    const response = await api.get(`/api/audio/${id}`);
    return response.data.content;
  }

  static async getFavorites() {
    const response = await api.get("/api/audio/favorites");
    return response.data.content;
  }
}

export default ApiAudioService;
