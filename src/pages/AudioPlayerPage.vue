<template>
  <q-page class="q-pa-md">
    <q-btn flat round color="primary" icon="arrow_back" @click="$router.back()"/>

    <div><q-img src="../assets/Corporate Flow_Logo.jpg"></q-img></div>
    <div class="details-text">
      <div class="text-h5">{{ currentAudio.title }}</div>
      <div class="text-subtitle1">{{ currentAudio.artist }}</div>
      <div class="text-subtitle2">{{ currentAudio.duration }}</div>
      <div class="text-body2 q-mt-md">{{ currentAudio.description }}</div>
    </div>


    <!-- <div class="details-area">Loading audio details...</div> -->

    <q-footer elevated class="fixed-bottom bg-grey-2">
      <div>
        <div class="name">
          {{ currentAudio ? currentAudio.title : (audioList[0] && audioList[0].title) || '' }}
        </div>
        <vue-audio-player
          ref="audioPlayer"
          :audio-list="audioList"
          v-model:current-audio="currentAudio"
          :show-play-loading="false"
        />
      </div>
    </q-footer>
  </q-page>
</template>

<script>
import {ref, computed} from 'vue';
import {useRoute} from 'vue-router';
import VueAudioPlayer from '@liripeng/vue-audio-player';
//import '@liripeng/vue-audio-player/dist/vue-audio-player.css';
import {useFavoritesStore} from 'stores/favorites';
import {storeToRefs} from "pinia";

export default {
  components: {
    VueAudioPlayer,
  },
  setup() {
    const route = useRoute();
    const favoriteStore = useFavoritesStore();
    const {favorites, currentAudio} = storeToRefs(favoriteStore);

    return {
      favorites,
      currentAudio,
    };
  },
  data() {
    return {
      currentAudioName: 'Test Audio',
      audioList: [
        {
          src: 'http://music.163.com/song/media/outer/url?id=317151.mp3', // Required
          title: 'Einführung in Corporate Flow', // Optional，Phone lock screen music player display
          artist: 'Sprecher: Kerstin & Lena', // Optional，Phone lock screen music player display
          duration: 'Länge: 3:45 Min', // Optional，Phone lock screen music player display
          description: 'In dieser Audio-Datei erfährst du, was Corporate Flow ist und wie du es für dich nutzen kannst.',
          artwork: [
            {
              src: 'https://upload.jianshu.io/users/upload_avatars/1696356/c358e43854eb?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
              sizes: '512x512',
              type: 'image/jpg',
            },
          ], // Optional，Phone lock screen music player display
        },
        {
          src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3', // Required
          title: 'Audio Title 2', // Optional，Phone lock screen music player display
        },
      ],
    }
  }
};
</script>

<style lang="scss" scoped>

.details-area {
  flex: 1; /* Details-Bereich nimmt den verfügbaren Platz ein */
  overflow-x: auto; /* Horizontaler Scroll aktiviert */
}

.details-content {
  display: flex;
}

.details-text {
  margin-left: 16px;
}

.fixed-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.name {
  text-align: center;
  padding: 10px;
  color: black;
  font-weight: bold;
}
</style>
