import { defineStore } from 'pinia';
import { TBreadcrumb } from 'app/src';

export const useAppStore = defineStore('appStore', {
  state: () => <{ drawer: boolean, breadcrumb: TBreadcrumb[] | undefined }>({
    drawer: false,
    breadcrumb: undefined,
  }),
  getters: {},
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    setBreadcrumb(breadcrumb: TBreadcrumb[]) {
      this.breadcrumb = breadcrumb;
    },
  },
});
