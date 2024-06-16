<template>
  <q-page class="q-pa-md bg-grey-1">
    <q-card class="bg-grey-3">
      <q-card-section>
        <div class="text-h6 text-dark">Settings</div>
      </q-card-section>
      <q-separator />

      <q-list>
        <q-item-label header class="text-primary">Account</q-item-label>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>Change Password</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>Log Out</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced />
        <q-item-label header class="text-primary">Notifications</q-item-label>
        <q-item tag="label">
          <q-item-section>
            <q-item-label>Enable Notifications</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-toggle v-model="notificationsEnabled" />
          </q-item-section>
        </q-item>

        <q-separator spaced />
        <q-item-label header class="text-primary">Theme</q-item-label>
        <q-item tag="label">
          <q-item-section>
            <q-item-label>Dark Mode</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-toggle v-model="darkModeEnabled" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const notificationsEnabled = ref(true); // Example initial state
    const darkModeEnabled = ref(false);    // Example initial state

    return { notificationsEnabled, darkModeEnabled };
  }
};
</script>

<style scoped>

</style>
