import { api } from "boot/axios";

class ApiAudioService {
  static async getAudioItems() {
    console.log("ApiAudioService - getAudioItems");
    const response = await api.get("/api/audio");
    console.log("audios response: ", response);
    return response.data.content.audioItems;
  }

  static async getAudioItem(id) {
    console.log("ApiAudioService - getAudioItem");
    console.log("id:", id);
    const response = await api.get(`/api/audio/${id}`);
    console.log("audio response: ", response);
    return response.data.content;
  }

  static async getFavorites() {
    console.log("ApiAudioService - getFavorites");
    const response = await api.get("/api/audio/favorites");
    console.log("favorites response: ", response);
    return response.data.content;
  }
}

export default ApiAudioService;
