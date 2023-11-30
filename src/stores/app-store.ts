import { defineStore } from 'pinia';
import { TBreadcrumb } from 'app/src';

export const useAppStore = defineStore('appStore', {
  state: () => <{ drawer: boolean, breadcrumb: TBreadcrumb[] | undefined, page: string }>({
    drawer: false,
    breadcrumb: undefined,
    page: '',
  }),
  getters: {},
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    setPage(page: string) {
      this.page = page;
    },
    setBreadcrumb(breadcrumb: TBreadcrumb[]) {
      this.breadcrumb = breadcrumb;
    },
  },
});
