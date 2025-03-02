import { defineStore } from 'pinia';

interface RouteData {
  route: string | undefined;
  componentName: string;
}

interface RouterObj {
  component: string;
  requiresData: boolean;
  componentName: string;
}

const route = window.location.pathname.split('/')?.at(-1)?.slice(0, -5); // NoSonar getting the current filename without the "html" ending
const defaultRoute = 'index'; // Fallback route if no match is found
const router: Record<string, RouterObj> = {
  form1: { component: 'Form1', requiresData: false, componentName: 'Formulario BurguerShot' },
  index: { component: 'Home', requiresData: false, componentName: 'Index' },
};

export const useRouteDataStore = defineStore('routeData', {
  state: (): RouteData => ({
    route,
    componentName: router[route || defaultRoute]?.componentName || 'Index',
  }),

  getters: {
    isFormRoute: (state) => state.route === 'form',
  },
});