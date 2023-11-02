import { VueQueryPlugin } from '@tanstack/vue-query';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import { setupLayouts } from 'virtual:generated-layouts';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router/auto';

import { vueQueryPluginOptions } from '@/plugins/vueQuery';

import App from './App.vue';

import './assets/main.css';

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: routes => setupLayouts(routes),
});

app.use(router);
app.use(VueQueryPlugin, vueQueryPluginOptions);
app.use(PrimeVue);
app.use(ToastService);

app.mount('#app');
