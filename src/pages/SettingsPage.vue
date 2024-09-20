<template>
  <q-page class="q-pa-md bg-grey-1">
    <q-card class="bg-grey-3" style="margin: min(30px)">
      <q-card-section>
        <div class="text-h6 text-dark">Einstellungen</div>
      </q-card-section>
      <q-separator spaced inset/>
      <q-list>
        <q-item-label header class="text-primary">Benachrichtigungen</q-item-label>
        <q-item>
          <q-item-section>
            <q-item-label>Benachrichtigungen aktivieren</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-toggle v-model="notificationsEnabled" />
          </q-item-section>
        </q-item>
        <q-separator spaced inset/>
        <q-item-label header class="text-primary">Thema</q-item-label>
        <q-item>
          <q-item-section>
            <q-item-label>Dunkler Modus</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-toggle v-model="darkModeEnabled" />
          </q-item-section>
          <q-space/>
        </q-item>
      </q-list>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const notificationsEnabled = ref(true);
    const darkModeEnabled = ref(false);

    return { notificationsEnabled, darkModeEnabled };
  },
};
</script>

<style scoped>

</style>
