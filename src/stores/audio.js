import { defineStore } from 'pinia';
import ApiAudioService from "src/services/api/ApiAudioService";

export const useAudioStore = defineStore('audio', {
  state: () => ({
    audioItems: [],
    audioItem: null,
  }),
  actions: {
    setCurrentAudioId(id) {
      this.id = id;
    },
    async fetchAudioItems() {
      try {
        const audioItems = await ApiAudioService.getAudioItems();
        this.audioItems = audioItems;
      } catch (error) {
        return error;
      }
    },
    async fetchAudioItem() {
      try {
        const audioItem = await ApiAudioService.getAudioItem(this.id);
        this.audioItem = audioItem;
      } catch (error) {
        console.error('Error loading audio item:', error);
        return error;
      }
    },
    async getFavorites() {
      try {
        const favorites = await ApiAudioService.getFavorites();
        return favorites;
      } catch (error) {
        console.error('Error loading favorites:', error);
        return error;
      }
    },
  },
  persist: true,
});
