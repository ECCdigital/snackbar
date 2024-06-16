<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-2">
      <q-tabs active-bg-color="primary">
        <q-route-tab
          to="/library"
          name="LibraryPage"
          icon="home"
          label="Library"
          class="text-dark"
        />

        <q-route-tab
          to="/favorites"
          name="FavoritesPage"
          icon="favorite"
          label="Favorites"
          class="text-dark"
        />

        <q-route-tab
          to="/profile"
          name="ProfilePage"
          icon="person"
          label="Profile"
          class="text-dark"
        />

        <q-route-tab
          to="/settings"
          name="SettingsPage"
          icon="settings"
          label="Settings"
          class="text-dark"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
