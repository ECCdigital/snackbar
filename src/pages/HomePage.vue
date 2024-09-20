<template>
  <q-page class="bg-grey-1">

      <div class="q-col-gutter-md q-ma-xl">
        <div class="col-6">
          <q-img src="../assets/snackbar_logo_nobg.png" class="flex"/>
        </div>
        <q-card class="bg-grey-3 flex flex-center">
        <div class="col-6 text-h6 text-center">
          Willkommen bei ECC Audio!
        </div>
        <div class="col-6 text-h6 text-center">
          Hier findest du eine Auswahl an spannenden und informativen Podcasts mit unseren Coaches.
        </div>
        <div class="col-6 text-h6 text-center">
          Viel Spaß!
        </div>
        </q-card>
      </div>

    <!-- <LibraryPage class="q-mt-lg" /> -->
  </q-page>
</template>

<script>
import {ref, onMounted} from 'vue';
import {api} from "boot/axios";

export default {

  setup() {

    onMounted(async () => {
      try {
        const response = await api.get('/api/audio');

      } catch (error) {
        console.error('Fehler beim Laden der Audiodaten:', error);
        return error;
      }
    });

    return {};
  },
};
</script>

<style lang="scss" scoped>

</style>
