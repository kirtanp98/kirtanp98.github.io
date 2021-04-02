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
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
    path: '/trackruterms',
    name: 'TrackRUTerms',
    component: TrackRUTerms,
  },
  {
    path: '/trackruPrivacyPolicy',
    name: 'TrackRUPrivacy',
    component: TrackRUPrivacy,
  },
  {
    path: '/Dropelet.Privacy.Policy',
    name: 'DropletsPrivacy',
    component: DropletsPrivacy,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
