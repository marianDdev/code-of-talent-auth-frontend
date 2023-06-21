import axios from 'axios';
import { defineStore } from 'pinia';

export const userStore = defineStore('user', {
  state: () => ({
    token: null,
    userName: null,
    email: null,
  }),

  actions: {
    setUserDetails(res) {
      console.log('setUserDetails', res.data);
      this.$state.token = res.data.token;
      this.$state.userName = res.data.user.first_name;
      this.$state.email = res.data.user.email;
    },

    clearUser() {
      this.$state.token = null;
      this.$state.userName = null;
      this.$state.email = null;
    },
  },
  persist: true,
});
