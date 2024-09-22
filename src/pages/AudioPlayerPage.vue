<template>
  <q-page class="q-pa-md bg-grey-1">
    <q-toolbar class="q-pa-md">
      <q-btn flat round color="primary" icon="arrow_back" @click="$router.back()"/>
      <q-toolbar-title class="text-center text-bold text-h5">Audio Player</q-toolbar-title>
    </q-toolbar>

    <q-card class="bg-grey-3 flex flex-center">
      <q-card-section>
          <div class=" q-pa-md">
            <div>
              <div class="text-h5 q-mb-sm">{{ audioItem.title }}</div>
              <div class="text-subtitle1">{{ audioItem.speaker }}</div>
              <div class="text-subtitle1">{{ convertSecondsToMinutes(audioItem.duration) }}</div>
              <q-separator class="q-my-md"/>
              <div class="text-body1">{{ audioItem.description }}</div>
            </div>
          </div>
      </q-card-section>
    </q-card>
    <q-footer elevated class="fixed-bottom bg-grey-2" style="padding-top: 10px">
      <div class="flex flex-center text-dark text-h6" style="padding: 5px">
        {{ audioItem.title }}
      </div>
      <vue-audio-player
        ref="audioPlayer"
        :audio-list="audioList"
        v-model:current-audio="audioItem"
        :show-play-loading="false"
      />
    </q-footer>
  </q-page>
</template>

<script>
import {ref, computed, onMounted} from 'vue';
import {useRouter} from 'vue-router';
import VueAudioPlayer from '@liripeng/vue-audio-player';
import {useFavoritesStore} from 'stores/favorites';
import {storeToRefs} from "pinia";
import {useAudioStore} from "stores/audio";
import useHelper from "src/services/helper";

export default {
  components: {
    VueAudioPlayer,
  },
  setup() {
    const router = useRouter;
    const audioStore = useAudioStore();
    const favoriteStore = useFavoritesStore();
    const {favorites} = storeToRefs(favoriteStore);
    const {audioItem} = storeToRefs(audioStore);
    const convertSecondsToMinutes = useHelper.convertSecondsToMinutes;

    const audioList = ref([]);

    onMounted(async () => {
      try {
        await audioStore.fetchAudioItem();
        const audioItem = audioStore.audioItem;
        console.log('Current audio item:', audioItem);
        console.log('audioItem.url:', audioItem.url);

        audioList.value.push(audioItem.url);
        console.log('Audio list:', audioList.value);
      } catch (error) {
        console.error('Error fetching audio items', error);
      }
    });

    return {
      favorites,
      audioItem,
      audioList,
      convertSecondsToMinutes,
    };
  },

};
</script>

<style lang="scss" scoped>

</style>
