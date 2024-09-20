import MainLayout from "layouts/MainLayout.vue";
import LoginLayout from "layouts/LoginLayout.vue";

const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'LoginPage', component: () => import('pages/LoginPage.vue') },
      { path: 'audioPlayer', name: 'AudioPlayerPage', component: () => import('pages/AudioPlayerPage.vue') },
    ]
  },
  {
    path: '/app', // New base path for MainLayout routes
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'HomePage', component: () => import('pages/HomePage.vue') },
      { path: 'library', name: 'LibraryPage', component: () => import('pages/LibraryPage.vue') },
      { path: 'profile', name: 'ProfilePage', component: () => import('pages/ProfilePage.vue') },
      { path: 'settings', name: 'SettingsPage', component: () => import('pages/SettingsPage.vue') },
      { path: 'favorites', name: 'FavoritesPage', component: () => import('pages/FavoritesPage.vue') },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    name: 'error-not-found',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
