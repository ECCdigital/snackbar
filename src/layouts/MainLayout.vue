<template>
  <q-layout view="hhh lpr fFf">

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-page-scroller>

    </q-page-scroller>

    <q-footer elevated class="bg-grey-2">
      <q-tabs active-bg-color="primary">
        <q-route-tab
          :to="{name: 'HomePage'}"
          name="HomePage"
          icon="rocket_launch"
          label="Start"
          class="text-dark"
        />

        <q-route-tab
          :to="{name:'LibraryPage'}"
          name="LibraryPage"
          icon="library_music"
          label="Audiothek"
          class="text-dark"
        />

<!--        <q-route-tab-->
<!--          :to="{name: 'FavoritesPage'}"-->
<!--          name="FavoritesPage"-->
<!--          icon="route"-->
<!--          label="Lernpfad"-->
<!--          class="text-dark"-->
<!--        />-->

        <q-route-tab
          :to="{name: 'ProfilePage'}"
          name="ProfilePage"
          icon="person"
          label="Profil"
          class="text-dark"
        />

        <q-route-tab
          :to="{name: 'SettingsPage'}"
          name="SettingsPage"
          icon="settings"
          label="Einstellungen"
          class="text-dark"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
<script setup>
</script>
