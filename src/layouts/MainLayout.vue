<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-page-scroller>

    </q-page-scroller>

    <q-footer elevated class="bg-grey-2">
      <q-tabs active-bg-color="primary">
        <q-route-tab
          to="/home"
          name="HomePage"
          icon="rocket_launch"
          label="Start"
          class="text-dark"
        />

        <q-route-tab
          to="/library"
          name="LibraryPage"
          icon="library_music"
          label="Audiothek"
          class="text-dark"
        />

        <q-route-tab
          to="/favorites"
          name="FavoritesPage"
          icon="route"
          label="Lernpfad"
          class="text-dark"
        />

        <q-route-tab
          to="/profile"
          name="ProfilePage"
          icon="person"
          label="Profil"
          class="text-dark"
        />

        <q-route-tab
          to="/settings"
          name="SettingsPage"
          icon="settings"
          label="Einstellungen"
          class="text-dark"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
