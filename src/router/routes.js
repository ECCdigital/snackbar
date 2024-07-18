import MainLayout from "layouts/MainLayout.vue";
import LoginLayout from "layouts/LoginLayout.vue";

const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path : '', component: () => import('pages/LoginPage.vue') }, // Login screen
      { path: 'audioPlayer', name: 'AudioPlayerPage', component: () => import('pages/AudioPlayerPage.vue') }, // Audio Player screen
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', name: 'HomePage', component: () => import('pages/HomePage.vue') }, // Home screen
      { path: 'library', name: 'LibraryPage', component: () => import('pages/LibraryPage.vue') }, // Default screen
      { path: 'profile', name: 'ProfilePage', component: () => import('pages/ProfilePage.vue') }, // Profile screen
      { path: 'settings', name: 'SettingsPage', component: () => import('pages/SettingsPage.vue') }, // Settings screen
      { path: 'favorites', name: 'FavoritesPage', component: () => import('pages/FavoritesPage.vue') }, // Favorites screen
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    name: 'error-not-found',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
