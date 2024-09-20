<template>
  <q-page class="bg-grey-3">
    <q-toolbar class="q-pa-md">
      <SearchBar categories="true" @search="filterItems"/>
      <q-toolbar-title class="text-bold text-h5">Audiothek</q-toolbar-title>
    </q-toolbar>
    <q-scroll-area style="height: 150vh; max-width: 100vw">
      <q-list>
        <q-virtual-scroll v-if="audioItems && audioItems.length > 0" :items="audioItems" virtual-scroll-horizontal
                          :virtual-scroll-item-size="300">
          <template v-slot="{ item, index }">
            <div class="q-pa-sm">
              <q-item :key="index">
                <q-card class="my-card" v-ripple @click="handleClick(item)">
                  <q-card-section :style="{backgroundImage: getStripeGradient(item.categories)}"
                                  class="my-card-title">
                  </q-card-section>
                  <q-card-section class="my-card-main">
                    <q-btn class="absolute-bottom-right" flat round
                           color="red" :icon="favoriteStore.isFavorite(item.id) ? 'favorite' : 'favorite_border'" @click.stop="toggleFavourite(item)"/>
                    <div class="text-bold text-dark">{{ item.title }}</div>
                    <q-separator spaced/>
                    <div class="text-dark">{{ item.speaker }}</div>
                    <div class="text-dark">{{ convertSecondsToMinutes(item.duration) }}</div>
                  </q-card-section>
                </q-card>
              </q-item>
            </div>
          </template>
        </q-virtual-scroll>
        <div v-else class="q-pa-md text-h6 text-center">Keine Audios gefunden</div>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import
{ref, onMounted} from 'vue';
import {useRouter} from 'vue-router';
import {useFavoritesStore} from 'stores/favorites';
import {useAudioStore} from "stores/audio";
import {storeToRefs} from "pinia";
import useHelper from "src/services/helper";
import SearchBar from "components/SearchBar.vue";

export default {
  components: {SearchBar},

  setup() {
    const favoriteStore = useFavoritesStore();
    const audioStore = useAudioStore();
    const router = useRouter();
    const {audioItems} = storeToRefs(audioStore);
    const {audioItem} = storeToRefs(audioStore);
    const searchQuery = ref('');
    const itemCategories = ref([]);
    const favorites = ref([]);

    const convertSecondsToMinutes = useHelper.convertSecondsToMinutes;

    onMounted(async () => {
      try {
        await audioStore.fetchAudioItems();
        console.log('Audiodaten geladen:', audioItems.value);
        audioItems.value.forEach((item) => {
          itemCategories.value.push(item.categories);
        });

        console.log('Kategorien:', itemCategories);
        console.log('Favoriten:', favorites);

      } catch (error) {
        console.error('Fehler beim Laden der Audiodaten:', error);
      }
    });

    const categoryColors = {
      'Zugehörigkeit': '#7d4c7a',
      'Macht': '#9a1f33',
      'Ordnung': '#194181',
      'Erfolg': '#e38044',
      'Gemeinschaft': '#507f6a',
      'Systemisch': '#f7d766',
      'Holistisch': '#6aa3a3',
      'Überleben': '#68251b',
    };

    const getCategoryColor = (category) => {
      console.log('Kategorie:', category);
      console.log('Farben:', categoryColors);
      return categoryColors[category] || 'grey';
    };

    const getStripeGradient = (itemCategories) => {
      console.log('getStripeGradient');
      if (!itemCategories || itemCategories.length === 0) {
        return 'grey';
      }

      const gradientStops = itemCategories.map((category, index) => {
        const color = getCategoryColor(category) || 'grey';
        const startPercent = (100 / itemCategories.length) * index;
        const endPercent = (100 / itemCategories.length) * (index + 1);

        return `${color} ${startPercent}%, ${color} ${endPercent}%`;
      }).join(', ');

      console.log(`Gradient: linear-gradient(90deg, ${gradientStops})`);
      const gradientString = `linear-gradient(90deg, ${gradientStops})`;
      console.log('Escaped CSS:', CSS.escape(gradientString));

      return gradientString
    };

    const toggleFavourite = (item) => {
      if (favoriteStore.isFavorite(item.id)) {
        favoriteStore.removeFavorite(item.id);
        console.log('Favoriten:', favorites);
        console.log('Favorit entfernt:', item.id);
      } else {
        favoriteStore.addFavorite(item.id);
        console.log('Favoriten:', favorites);
        console.log('Favorit hinzugefügt:', item.id);
      }
    };

    const handleClick = (item) => {
      audioStore.setCurrentAudioId(item.id);
      setTimeout(() => {
        router.push({name: 'AudioPlayerPage'});
      }, 300);
    };

    // const filteredItems = computed(() => {
    //   if (!searchQuery.value) {
    //     return audioItems.value;
    //   }
    //   return audioItems.value.filter(item =>
    //     filterFunction(item, searchQuery.value)
    //   );
    // });
    //
    // const filterFunction = (item, query) => {
    //   const queryLower = query.toLowerCase();
    //   return item.title.toLowerCase().includes(queryLower) ||
    //     item.description.toLowerCase().includes(queryLower);
    // }
    //
    // const filterItems = (query) => {
    //   searchQuery.value = query;
    // };

    return {
      favoriteStore,
      audioStore,
      getStripeGradient,
      router,
      searchQuery,
      handleClick,
      audioItem,
      audioItems,
      convertSecondsToMinutes,
      itemCategories,
      categoryColors,
      getCategoryColor,
      toggleFavourite,
      favorites,
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
