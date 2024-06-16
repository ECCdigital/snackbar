const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') }, // Login screen
      { path: 'library', name: 'LibraryPage', component: () => import('pages/LibraryPage.vue') }, // Default screen
      { path: 'profile', name: 'ProfilePage', component: () => import('pages/ProfilePage.vue') }, // Profile screen
      { path: 'settings', name: 'SettingsPage', component: () => import('pages/SettingsPage.vue') }, // Settings screen
      { path: 'favorites', name: 'FavoritesPage', component: () => import('pages/FavoritesPage.vue') }, // Favorites screen
      { path: 'audioPlayer', name: 'AudioPlayerPage', component: () => import('pages/AudioPlayerPage.vue') }, // Audio Player screen
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
