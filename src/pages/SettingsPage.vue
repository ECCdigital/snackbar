<template>
  <q-page class="bg-grey-1 flex flex-center q-pa-md">
    <q-card class="bg-grey-3 q-ma-lg q-pa-sm">
      <q-card-section class="col-grow content-start items-start">
        <div class="text-h6 text-dark">Einstellungen</div>
      </q-card-section>
      <q-separator spaced inset/>
      <q-card-section class="col-grow content-start items-start">
      <q-list>
        <q-item-label header class="text-primary">Benachrichtigungen</q-item-label>
        <q-item>
          <q-item-section>
            <q-item-label>Benachrichtigungen aktivieren</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-toggle v-model="notificationsEnabled" />
            <div class="text-dark text-subtitle1">(Bald verfügbar)</div>
          </q-item-section>
        </q-item>
        <q-separator spaced inset/>
        <q-item-label header class="text-primary">Thema</q-item-label>
        <q-item>
          <q-item-section>
            <q-item-label>Dunkler Modus</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat round @click="toggleDarkMode" :icon="darkModeEnabled ? 'brightness_2' : 'brightness_5'" />
            <div class="text-dark text-subtitle1">(Bald verfügbar)</div>
          </q-item-section>
          <q-space/>
        </q-item>
      </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const notificationsEnabled = ref(true);
    const darkModeEnabled = ref(false);

    const toggleDarkMode = () => {
      darkModeEnabled.value = !darkModeEnabled.value;
    };

    return { notificationsEnabled, darkModeEnabled, toggleDarkMode};
  },
};
</script>

<style scoped>

</style>
