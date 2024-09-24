<template>
  <q-header elevated class="bg-grey-1 ">
    <q-toolbar>
      <q-toolbar-title class="text-h5 text-dark text-center">Audiothek</q-toolbar-title>
      <q-btn dense flat round color="black" icon="info" @click="toggleLegend"/>
    </q-toolbar>
  </q-header>

  <q-drawer
    v-model="isLegendOpen"
    side="right"
    elevated
    :breakpoint="300"
    :width="250"
  >
    <div class="text-center text-h6 text-dark q-pa-sm">Farblehre</div>
    <div v-for="item in legendData" :key="item.title">
      <q-item>
        <q-item-section avatar>
          <q-icon name="circle" :color="item.color" size="md"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.title }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-checkbox size="md" v-model="checkedTitle" :val="item.title" :checkedTitle="item.title"/>
        </q-item-section>
      </q-item>
    </div>
    <div class="text-subtitle1 text-dark text-center q-pa-md">
      <q-icon name="info" size="md" color="primary"/>
      (Filter bald verfügbar)
    </div>
  </q-drawer>
  <q-page class="q-pa-md bg-grey-1">
    <div v-if="audioItems && audioItems.length > 0">
      <section v-for="(category, catName) in groupedAudioItems" :key="catName">
        <div class="q-pa-md text-dark text-h6">{{ catName }}</div>
        <q-virtual-scroll :items="category.items" v-slot="{ item, index}" virtual-scroll-horizontal>
          <div class="no-wrap flex q-gutter-md q-pa-md" :key="index">
            <q-card class="my-card" v-ripple @click="handleClick(item)">
              <q-card-section :style="{backgroundImage: getStripeGradient(item.tags)}"
                              class="my-card-title">
              </q-card-section>
              <q-card-section class="my-card-main">
                <q-btn class="absolute-bottom-right" flat round
                       color="red" :icon="favoriteStore.isFavorite(item.id) ? 'favorite' : 'favorite_border'"
                       @click.stop="toggleFavourite(item)"/>
                <div class="text-bold text-dark">{{ item.title }}</div>
                <q-separator spaced/>
                <div class="text-dark">{{ item.speaker }}</div>
                <div class="text-dark">{{ convertSecondsToMinutes(item.duration) }}</div>
              </q-card-section>
            </q-card>
          </div>
        </q-virtual-scroll>
      </section>
    </div>

    <div v-else class="q-pa-md text-h6 text-center">Keine Audios gefunden</div>
  </q-page>
</template>

<script>
import
{ref, onMounted, computed} from 'vue';
import {useRouter} from 'vue-router';
import {useFavoritesStore} from 'stores/favorites';
import {useAudioStore} from "stores/audio";
import {storeToRefs} from "pinia";
import useHelper from "src/services/helper";
import {colors} from 'quasar';

export default {

  setup() {
    const favoriteStore = useFavoritesStore();
    const audioStore = useAudioStore();
    const router = useRouter();
    const {audioItems} = storeToRefs(audioStore);
    const {audioItem} = storeToRefs(audioStore);
    const groupedAudioItems = ref({});
    const searchQuery = ref('');
    const itemCategory = ref('');
    const itemTags = ref([]);
    const favorites = ref([]);

    const convertSecondsToMinutes = useHelper.convertSecondsToMinutes;
    const isLegendOpen = ref(false);
    const {getPaletteColor} = colors;

    const generateDummyData = (count) => {
      const categories = ['Allgemeines', 'Main 7', 'Corporate Flow'];
      const tags = ['Holistisch', 'Systemisch', 'Gemeinschaft', 'Erfolg', 'Ordnung', 'Macht', 'Zugehörigkeit', 'Überleben'];
      const dummyData = [];
      for (let i = 0; i < count; i++) {
        const numTags = Math.floor(Math.random() * tags.length) + 1;
        const selectedTags = [];

        for (let j = 0; j < numTags; j++) {
          const randomTag = tags[Math.floor(Math.random() * tags.length)];
          if (!selectedTags.includes(randomTag)) {
            selectedTags.push(randomTag);
          }
        }

        dummyData.push({
          id: `dummy-${i}`,
          title: `Dummy Title ${i}`,
          description: `Dummy Description ${i}`,
          url: `http://dummy.url/${i}`,
          duration: Math.floor(Math.random() * 300),
          category: categories[Math.floor(Math.random() * categories.length)],
          tags: selectedTags,
          speaker: `Speaker ${i}`,
          isFavorite: false,
        });
      }
      return dummyData;
    };

    onMounted(async () => {
      try {
        await audioStore.fetchAudioItems();
        audioItems.value.forEach((item) => {
          itemCategory.value = item.category;
        });
        const dummyData = generateDummyData(10);
        audioItems.value = [...audioItems.value, ...dummyData];

        groupedAudioItems.value = groupAudioItemsByCategory(audioItems.value);

        audioItems.value.forEach((item) => {
          itemTags.value.push(item.tags);
        });

      } catch (error) {
        console.error('Fehler beim Laden der Audiodaten:', error);
      }
      isLegendOpen.value = false;
    });

    const categoryColors = {
      'Holistisch': '#6aa3a3',
      'Systemisch': '#f7d766',
      'Gemeinschaft': '#507f6a',
      'Erfolg': '#e38044',
      'Ordnung': '#194181',
      'Macht': '#9a1f33',
      'Zugehörigkeit': '#7d4c7a',
      'Überleben': '#68251b',
    };

    const legendColors = {
      'Holistisch': 'teal-1',
      'Systemisch': 'yellow-1',
      'Gemeinschaft': 'green-1',
      'Erfolg': 'orange-1',
      'Ordnung': 'blue-1',
      'Macht': 'red-1',
      'Zugehörigkeit': 'purple-1',
      'Überleben': 'brown-1',
    };

    const groupAudioItemsByCategory = (items) => {
      return items.reduce((groupedItems, item) => {
        if (!groupedItems[item.category]) {
          groupedItems[item.category] = {items: []};
        }
        groupedItems[item.category].items.push(item);
        return groupedItems;
      }, {});
    };

    const getCategoryColor = (tag) => {
      //console.log('Kategorie:', category);
      //console.log('Farben:', categoryColors);
      return categoryColors[tag] || 'grey';
    };

    const getStripeGradient = (itemTags) => {
      //console.log('getStripeGradient');
      if (!itemTags || itemTags.length === 0) {
        return 'grey';
      }

      const gradientStops = itemTags.map((tag, index) => {
        const color = getCategoryColor(tag) || 'grey';
        const startPercent = (100 / itemTags.length) * index;
        const endPercent = (100 / itemTags.length) * (index + 1);

        return `${color} ${startPercent}%, ${color} ${endPercent}%`;
      }).join(', ');

      //console.log(`Gradient: linear-gradient(90deg, ${gradientStops})`);
      const gradientString = `linear-gradient(90deg, ${gradientStops})`;
      //console.log('Escaped CSS:', CSS.escape(gradientString));

      //console.log('Gradient:', gradientString);
      return gradientString
    };

    const legendData = computed(() => {
      return Object.entries(legendColors).map(([title, color]) => {
        return {
          title,
          color
        };
      });
    });

    const toggleLegend = () => {
      isLegendOpen.value = !isLegendOpen.value;
    };

    const toggleFavourite = (item) => {
      if (favoriteStore.isFavorite(item.id)) {
        favoriteStore.removeFavorite(item.id);
      } else {
        favoriteStore.addFavorite(item.id);
      }
    };

    const handleClick = (item) => {
      audioStore.setCurrentAudioId(item.id);
      setTimeout(() => {
        router.push({name: 'AudioPlayerPage'});
      }, 300);
    };

    return {
      favoriteStore,
      audioStore,
      getStripeGradient,
      router,
      searchQuery,
      handleClick,
      audioItem,
      audioItems,
      groupedAudioItems,
      convertSecondsToMinutes,
      itemCategory,
      itemTags,
      categoryColors,
      getCategoryColor,
      toggleFavourite,
      favorites,
      isLegendOpen,
      legendData,
      toggleLegend,
      getPaletteColor,
      checkedTitle: ref(['Holistisch', 'Systemisch', 'Gemeinschaft', 'Erfolg', 'Ordnung', 'Macht', 'Zugehörigkeit', 'Überleben']),
    };
  }
};
</script>

<style lang="scss" scoped>
// $
</style>
