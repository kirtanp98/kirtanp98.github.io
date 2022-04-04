import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import TrackRUTerms from '../views/TrackRUTerms.vue';
import TrackRUPrivacy from '../views/TrackRUPrivacy.vue';
import DropletsPrivacy from '../views/DropletsPrivacy.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
