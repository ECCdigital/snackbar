import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [],
  }),
  actions: {
    isFavorite(audioItemId) {
      return this.favorites.some(item => item === audioItemId);
    },
    async addFavorite(audioItem) {
      if (!this.isFavorite(audioItem.id)) {
        this.favorites.push(audioItem);
      }
    },
    async removeFavorite(audioItem) {
      this.favorites = this.favorites.filter(item => item !== audioItem);
    },
  },
  persist: true,
});
