import { defineStore } from 'pinia';
import ApiUserService from "src/services/api/ApiUserService";

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    users: [],
  }),
  actions: {
    setUserId(id) {
      this.id = id;
    },
    async fetchUser() {
      try {
        console.log(this.id)
        const user = await ApiUserService.getUser(this.id);
        console.log("user:",user)
        this.user = user;
        console.log('Benutzerprofil geladen:', this.user);
      } catch (error) {
        console.error('Fehler beim Laden des Benutzerprofils:', error);
        return error;
      }
    },
    async fetchUsers() {
      try {
        const users = await ApiUserService.getUsers();
        this.users = users;
        console.log('Benutzer geladen:', users);
      } catch (error) {
        console.error('Fehler beim Laden der Benutzer:', error);
        return error;
      }
    }
  },
  persist: true,
});
