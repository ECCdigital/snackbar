<template>
  <q-page class="bg-grey-1">
    <div class="q-col-gutter-md q-ma-xl">
      <div class="col-6">
        <q-img src="../assets/Corporate Flow_Logo.jpg">
          <div class="absolute-bottom text-subtitle1 text-center">
            Corporate Flow App
          </div>
        </q-img>
      </div>
    </div>
    <q-item>
      <q-item-section>
        <q-item-label header class="text-h5 text-primary">Willkommen!</q-item-label>
        <q-separator spaced/>
        <q-scroll-area class="items-scroll-area">
          <div class="row no-wrap q-gutter-sm">
            <q-item
              v-for="(item, index) in [1,2,3,4,5]"
              :key="index"
              style="width: 300px; margin: 0"
            >
              <q-card class="my-card">
                <q-card-section>
                  <div class="text-h6 text-dark">Titel</div>
                  <q-separator spaced/>
                  <div class="text-caption text-grey">Beschreibung</div>
                  <q-separator spaced/>
                  <div class="text-dark">Sprecher | Dauer</div>
                </q-card-section>
              </q-card>
            </q-item>
          </div>
        </q-scroll-area>
      </q-item-section>
    </q-item>
  </q-page>
</template>

<script>
import {ref} from 'vue';
import {onMounted} from 'vue';
import {useFavoritesStore} from "stores/favorites";
import axios from "axios";

export default {
  setup() {
    const favoriteStore = useFavoritesStore();

    const personalItems = ref([
      {
        items: [
          {
            id: 1,
            title: 'Item 1',
            description: 'Description 1',
            isFavourite: true,
            speaker: 'Speaker 1',
            duration: '1:00'
          },
          {id: 2, title: 'Item 2', description: 'Description 2', isFavourite: true},
          {id: 3, title: 'Item 3', description: 'Description 3', isFavourite: false},
          {id: 4, title: 'Item 4', description: 'Description 4', isFavourite: false},
          {id: 5, title: 'Item 5', description: 'Description 5', isFavourite: false},
        ]
      }
    ]);
  },
};
</script>

<style lang="scss" scoped>

</style>
