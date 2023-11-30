import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
  state: () => ({
    drawer: false,
  }),
  getters: {},
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
});
