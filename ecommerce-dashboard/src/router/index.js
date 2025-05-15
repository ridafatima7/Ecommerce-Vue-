import { createRouter, createWebHistory } from 'vue-router';
import RevenuePage from '../pages/RevenuePage.vue';
import InventoryPage from '../pages/InventoryPage.vue';
import ProductRegistration from '../pages/ProductRegistration.vue';

const routes = [
  { path: '/', component: RevenuePage },
  { path: '/inventory', component: InventoryPage },
  { path: '/register', component: ProductRegistration }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
