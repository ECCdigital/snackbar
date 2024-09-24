import {defineStore} from 'pinia';
import ApiAuthService from "src/services/api/ApiAuthService";
import {useUserStore} from "stores/user";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isSignedIn: false,
    me: null,
  }),
  persist: true,
  actions: {
    async login(username, password) {
      try {
        const response = await ApiAuthService.login(username, password);
        this.isSignedIn = true;
        this.me = response.content.user;
        const userStore = useUserStore();
        userStore.setUserId(response.content.user.id);
        return response;
      } catch (error) {
        this.isSignedIn = false;
        this.me = null;
      }
    },
    async fetchMe() {
      try {
        const response = await ApiAuthService.me();
        this.isSignedIn = true;
        this.me = response.user;
      } catch (error) {
        this.isSignedIn = false;
        this.me = null;
      }
    },
    async logout() {
      try {
        const response = await ApiAuthService.logout();
        if (response.success) {
          this.isSignedIn = false;
          this.me = null;
          return response.success;
        } else {
          return response;
        }
      } catch (error) {
        console.error(error);
        return error;
      }
    },
  },
  getters: {
    signedIn() {
      return this.isSignedIn;
    },
  },
});
