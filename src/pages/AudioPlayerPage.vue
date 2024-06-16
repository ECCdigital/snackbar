<template>
  <q-page class="q-pa-md">
    <q-btn
      flat
      round
      color="primary"
      icon="arrow_back"
      @click="$router.back()"
    />
    <q-card>
      <q-card-section>
        <div>
          <div class="name">
            {{ currentAudioName || audioList[0].title }}
          </div>
          <vue-audio-player
            ref="audioPlayer"
            :audio-list="audioList"
            :before-play="handleBeforePlay"
            :show-play-loading="false"
            @ended="handleEnded"
          >
          </vue-audio-player>

          <button @click="handlePlaySpecify">Play the second audio</button>
        </div>
      </q-card-section>
        <div class="name">
          {{ currentAudioName || audioList[0].title }}
        </div>
    </q-card>
  </q-page>
</template>

<script>
import VueAudioPlayer from '@liripeng/vue-audio-player';
//import '@liripeng/vue-audio-player/dist/vue-audio-player.css'; // Import the CSS

export default {
  components: {
    VueAudioPlayer
  },
  data() {
    return {
      currentAudioName: '',
      audioList: [
        {
          src: 'http://music.163.com/song/media/outer/url?id=317151.mp3', // Required
          title: 'Audio Title 1', // Optional，Phone lock screen music player display
          artist: 'Artist Name 1', // Optional，Phone lock screen music player display
          album: 'Album Name 1', // Optional，Phone lock screen music player display
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
    // ... rest of your component logic
  }
}
</script>
