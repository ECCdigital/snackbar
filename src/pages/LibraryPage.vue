<template>
  <q-page class="bg-grey-1">
    <q-fab
      @click="toggleSearchbar"
      class="fixed-top-right q-ma-sm"
      icon="search"
    />
    <q-infinite-scroll style="height: 150vh; max-width: 100vw;">
      <q-list>
        <q-item v-for="(category, index) in categories" :key="index">
          <q-item-section>
            <q-item-label header class="text-h5 text-primary">{{ category.title }}</q-item-label>
            <q-scroll-area  class="items-scroll-area">
              <div class="flex row no-wrap q-col-gutter-xs">
                <q-item
                  v-for="(item, itemIndex) in category.items"
                  :key="itemIndex"
                >
                  <q-card class="my-card" flat bordered @click="() => {
                    favoriteStore.setCurrentAudio(item);
                    $router.push({name: 'AudioPlayerPage'});
                  }">
                    <q-card-section class="flex my-card-title" :style="{backgroundImage: getStripeGradient(item.categories)}">
                    </q-card-section>
                    <q-card-section class="my-card-main">
                      <div class="absolute-top-right">
                        <q-btn
                          round
                          flat
                          :icon="item.isFavourite ? 'favorite' : 'favorite_border'"
                          :color="item.isFavourite ? 'red' : 'grey-5'"
                          @click.stop="toggleFavourite(item)"
                        />
                      </div>
                      <div class="text-h6 text-dark">{{ item.title }}</div>
                      <div class="text-caption text-grey">{{ item.description }}</div>
                      <div class="text-dark">{{ item.speaker }}</div>
                      <div class="text-dark">{{ item.duration }}</div>
                    </q-card-section>
                  </q-card>
                </q-item>
              </div>
            </q-scroll-area>
          </q-item-section>
        </q-item>
      </q-list>
    </q-infinite-scroll>
  </q-page>
</template>

<script>
import {ref} from 'vue';
import {useFavoritesStore} from '../stores/favorites'; // Passen Sie den Pfad bei Bedarf an


export default {
  methods: {
    handleClick(item) {
      this.useRouter.push({name: 'AudioPlayerPage'});
    },

  },
  setup() {
    const toggleFavourite = (item) => {
      item.isFavourite = !item.isFavourite;
      // Update favourite status in your data source (API or local storage)
      updateFavouriteStatus(item.id, item.isFavourite);
    };

    // Placeholder function (replace with your actual implementation)
    async function updateFavouriteStatus(itemId, isFavourite) {
      // Update logic in your data source...
      console.log(`Item ${itemId} is now ${isFavourite ? 'favourite' : 'not favourite'}`);
    }

    const toggleSearchbar = () => {
      console.log('Searchbar toggled');

    };

    const favoriteStore = useFavoritesStore();

    const getStripeGradient = (itemCategories) => {
      if (!itemCategories || itemCategories.length === 0) {
        return 'none';
      }

      // Farben extrahieren und Gradienten-Stopps erstellen
      const gradientStops = itemCategories.map((category, index) => {
        const color = categoryColors[category] || 'grey'; // Standardfarbe, falls keine Übereinstimmung gefunden wird
        //const startPercent = (100 / itemCategories.length) * index;
        //const endPercent = (100 / itemCategories.length) * (index + 1);
        return `${color} 50%, ${color} 50%`;
      }).join(', ');

      // Gradient erstellen
      return `linear-gradient(-45deg, ${gradientStops})`;
    };

    const categoryColors = {
      'Zugehörigkeit': 'purple',
      'Macht': 'red',
      'Ordnung': 'blue',
      'Erfolg': 'orange',
      'Gemeinschaft': 'green',
      'Systemisch': 'yellow',
      'Holistisch': 'teal',
      'Überleben': 'brown',
    };

    const mainCategories = ref([
      {
        title: 'Corporate Flow',
        items: [
          {id: 1, title: 'Audio 1', description: '...', speaker: 'Kerstin', duration: '3:50 min', categories: ['Macht']},
          {id: 2, title: 'Audio 2', description: '...', speaker: '..', duration: '..', categories: ['Ordnung', 'Zugehörigkeit']},
          {id: 3, title: 'Audio 3', description: '...', speaker: '..', duration: '..', categories: ['Gemeinschaft', 'Erfolg']},
          {id: 4, title: 'Audio 4', description: '...', speaker: '..', duration: '..', categories: ['Systemisch', 'Holistisch']},
          {id: 5, title: 'Audio 5', description: '...', speaker: '..', duration: '..'},
          {id: 6, title: 'Audio 6', description: '...', speaker: '..', duration: '..'},
          {id: 7, title: 'Audio 7', description: '...', speaker: '..', duration: '..'},
          {id: 8, title: 'Audio 8', description: '...', speaker: '..', duration: '..'},
          {id: 9, title: 'Audio 9', description: '...', speaker: '..', duration: '..'},
          {id: 10, title: 'Audio 10', description: '...', speaker: '..', duration: '..'},
        ]
      },
      {
        title: 'Main 7',
        items: [
          {id: 1, title: 'Audio 1', description: '...', speaker:'..', duration: '..'},
          {id: 2, title: 'Audio 2', description: '...', speaker:'..', duration: '..'},
          {id: 3, title: 'Audio 3', description: '...', speaker:'..', duration: '..'},
          {id: 4, title: 'Audio 4', description: '...', speaker:'..', duration: '..'},
          {id: 5, title: 'Audio 5', description: '...', speaker:'..', duration: '..'},
          {id: 6, title: 'Audio 6', description: '...', speaker:'..', duration: '..'},
          {id: 7, title: 'Audio 7', description: '...', speaker:'..', duration: '..'},
          {id: 8, title: 'Audio 8', description: '...', speaker:'..', duration: '..'},
          {id: 9, title: 'Audio 9', description: '...', speaker:'..', duration: '..'},
          {id: 10, title: 'Audio 10', description: '...', speaker:'..', duration: '..'},
        ]
      },
      {
        title: 'Hebelpunkte / Tools', items: [
          {id: 1, title: 'Audio 1', description: '...', speaker:'..', duration: '..'},
          {id: 2, title: 'Audio 2', description: '...', speaker:'..', duration: '..'},
          {id: 3, title: 'Audio 3', description: '...', speaker:'..', duration: '..'},
          {id: 4, title: 'Audio 4', description: '...', speaker:'..', duration: '..'},
          {id: 5, title: 'Audio 5', description: '...', speaker:'..', duration: '..'},
          {id: 6, title: 'Audio 6', description: '...', speaker:'..', duration: '..'},
          {id: 7, title: 'Audio 7', description: '...', speaker:'..', duration: '..'},
          {id: 8, title: 'Audio 8', description: '...', speaker:'..', duration: '..'},
          {id: 9, title: 'Audio 9', description: '...', speaker:'..', duration: '..'},
          {id: 10, title: 'Audio 10', description: '...', speaker:'..', duration: '..'},
        ]
      },
    ]);

    return {categories: mainCategories, toggleFavourite, toggleSearchbar, favoriteStore, getStripeGradient};
  }
};
</script>

<style lang="scss" scoped>

</style>
