import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [],
    currentAudio: null, // Store the current audio item
    isLoading: true,
  }),
  actions: {
    // ... (Ihre bestehenden Aktionen: addFavorite, removeFavorite, isFavorite, etc.)
    setCurrentAudio(audio) {
      this.currentAudio = audio;
    },
  },
  $subscribe: (mutation, state) => {
    // Speichern Sie den gesamten Zustandsbaum in localStorage
    localStorage.setItem('favorites', JSON.stringify(state));
  },
  setAudioList(audioData) {
    this.audioList = audioData;
    this.isLoading = false;
  }
});
