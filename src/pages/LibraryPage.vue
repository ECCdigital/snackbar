<template>
  <q-page class="bg-grey-1">
    <q-scroll-area style="height: 150vh; max-width: 100vw;">
      <q-list>
        <q-item v-for="(category, index) in categories" :key="index">
          <q-item-section>
            <q-item-label header class="text-h5 text-primary">{{ category.title }}</q-item-label>
            <q-scroll-area class="items-scroll-area">
              <div class="row no-wrap q-gutter-sm">
                <q-item
                  v-for="(item, itemIndex) in category.items"
                  clickable
                  v-ripple
                  :key="itemIndex"
                  style="width: 200px; margin: 0px"
                  @click="$router.push({name: 'AudioPlayerPage', params: {audioId: item.id}})"
                >
                  <q-card :class="['my-card', getCategoryColor(category.title)]">
                  <q-icon name="mdi-music" size="lg" class="q-ma-lg"/>
                  <div class="absolute-top-right q-ma-md">
                    <q-btn
                      round
                      flat
                      :icon="item.isFavourite ? 'favorite' : 'favorite_border'"
                      :color="item.isFavourite ? 'red' : 'grey-5'"
                      @click.stop="toggleFavourite(item)"
                    />
                  </div>
                  <q-card-section>
                    <div class="text-h6 text-dark">{{ item.title }}</div>
                    <div class="text-caption text-grey">{{ item.description }}</div>
                  </q-card-section>
                  </q-card>
                </q-item>
              </div>
            </q-scroll-area>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
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

    const categoryColors = {
      'Category 1': 'bg-blue-5',
      'Category 2': 'bg-green-5',
      'Category 3': 'bg-orange-5',
      'Category 4': 'bg-red-5',
      'Category 5': 'bg-teal-5',
      'Category 6': 'bg-purple-5'
    };

    const getCategoryColor = (categoryTitle) => categoryColors[categoryTitle] || 'bg-grey-3';

    const categories = ref([
      {
        title: 'Category 1',
        items: [
          { id: 1, title: 'Audio 1', description: '...', image: '...' },
          { id: 2, title: 'Audio 2', description: '...', image: '...' },
          { id: 3, title: 'Audio 3', description: '...', image: '...'},
          { id: 4, title: 'Audio 4', description: '...', image: '...'},
          { id: 5, title: 'Audio 5', description: '...', image: '...'},
          { id: 6, title: 'Audio 6', description: '...', image: '...'},
          { id: 7, title: 'Audio 7', description: '...', image: '...'},
          { id: 8, title: 'Audio 8', description: '...', image: '...'},
          { id: 9, title: 'Audio 9', description: '...', image: '...'},
          { id: 10, title: 'Audio 10', description: '...', image: '...'},
          { id: 11, title: 'Audio 11', description: '...', image: '...'},
          { id: 12, title: 'Audio 12', description: '...', image: '...'},
          { id: 13, title: 'Audio 13', description: '...', image: '...'},
          { id: 14, title: 'Audio 14', description: '...', image: '...'},
          { id: 15, title: 'Audio 15', description: '...', image: '...'},
          { id: 16, title: 'Audio 16', description: '...', image: '...'},
          { id: 17, title: 'Audio 17', description: '...', image: '...'},
          { id: 18, title: 'Audio 18', description: '...', image: '...'},
          { id: 19, title: 'Audio 19', description: '...', image: '...'},
          { id: 20, title: 'Audio 20', description: '...', image: '...'},
          { id: 21, title: 'Audio 21', description: '...', image: '...'},
          { id: 22, title: 'Audio 22', description: '...', image: '...'},
          { id: 23, title: 'Audio 23', description: '...', image: '...'},
          { id: 24, title: 'Audio 24', description: '...', image: '...'},
          { id: 25, title: 'Audio 25', description: '...', image: '...'},
        ]
      },
      {
        title: 'Category 2',
        items: [
          { id: 1, title: 'Audio 1', description: '...', image: '...' },
          { id: 2, title: 'Audio 2', description: '...', image: '...' },
          { id: 3, title: 'Audio 3', description: '...', image: '...'},
          { id: 4, title: 'Audio 4', description: '...', image: '...'},
          { id: 5, title: 'Audio 5', description: '...', image: '...'},
          { id: 6, title: 'Audio 6', description: '...', image: '...'},
          { id: 7, title: 'Audio 7', description: '...', image: '...'},
          { id: 8, title: 'Audio 8', description: '...', image: '...'},
          { id: 9, title: 'Audio 9', description: '...', image: '...'},
          { id: 10, title: 'Audio 10', description: '...', image: '...'},
          { id: 11, title: 'Audio 11', description: '...', image: '...'},
          { id: 12, title: 'Audio 12', description: '...', image: '...'},
          { id: 13, title: 'Audio 13', description: '...', image: '...'},
          { id: 14, title: 'Audio 14', description: '...', image: '...'},
          { id: 15, title: 'Audio 15', description: '...', image: '...'},
          { id: 16, title: 'Audio 16', description: '...', image: '...'},
          { id: 17, title: 'Audio 17', description: '...', image: '...'},
          { id: 18, title: 'Audio 18', description: '...', image: '...'},
          { id: 19, title: 'Audio 19', description: '...', image: '...'},
          { id: 20, title: 'Audio 20', description: '...', image: '...'},
          { id: 21, title: 'Audio 21', description: '...', image: '...'},
          { id: 22, title: 'Audio 22', description: '...', image: '...'},
          { id: 23, title: 'Audio 23', description: '...', image: '...'},
          { id: 24, title: 'Audio 24', description: '...', image: '...'},
          { id: 25, title: 'Audio 25', description: '...', image: '...'},
        ]
      },
      { title: 'Category 3', items: [
          { id: 1, title: 'Audio 1', description: '...', image: '...' },
          { id: 2, title: 'Audio 2', description: '...', image: '...' },
          { id: 3, title: 'Audio 3', description: '...', image: '...'},
          { id: 4, title: 'Audio 4', description: '...', image: '...'},
          { id: 5, title: 'Audio 5', description: '...', image: '...'},
          { id: 6, title: 'Audio 6', description: '...', image: '...'},
          { id: 7, title: 'Audio 7', description: '...', image: '...'},
          { id: 8, title: 'Audio 8', description: '...', image: '...'},
          { id: 9, title: 'Audio 9', description: '...', image: '...'},
          { id: 10, title: 'Audio 10', description: '...', image: '...'},
          { id: 11, title: 'Audio 11', description: '...', image: '...'},
          { id: 12, title: 'Audio 12', description: '...', image: '...'},
          { id: 13, title: 'Audio 13', description: '...', image: '...'},
          { id: 14, title: 'Audio 14', description: '...', image: '...'},
          { id: 15, title: 'Audio 15', description: '...', image: '...'},
          { id: 16, title: 'Audio 16', description: '...', image: '...'},
          { id: 17, title: 'Audio 17', description: '...', image: '...'},
          { id: 18, title: 'Audio 18', description: '...', image: '...'},
          { id: 19, title: 'Audio 19', description: '...', image: '...'},
          { id: 20, title: 'Audio 20', description: '...', image: '...'},
          { id: 21, title: 'Audio 21', description: '...', image: '...'},
          { id: 22, title: 'Audio 22', description: '...', image: '...'},
          { id: 23, title: 'Audio 23', description: '...', image: '...'},
          { id: 24, title: 'Audio 24', description: '...', image: '...'},
          { id: 25, title: 'Audio 25', description: '...', image: '...'},
        ]},
      { title: 'Category 4', items: [
          { id: 1, title: 'Audio 1', description: '...', image: '...' },
          { id: 2, title: 'Audio 2', description: '...', image: '...' },
          { id: 3, title: 'Audio 3', description: '...', image: '...'},
          { id: 4, title: 'Audio 4', description: '...', image: '...'},
          { id: 5, title: 'Audio 5', description: '...', image: '...'},
          { id: 6, title: 'Audio 6', description: '...', image: '...'},
          { id: 7, title: 'Audio 7', description: '...', image: '...'},
          { id: 8, title: 'Audio 8', description: '...', image: '...'},
          { id: 9, title: 'Audio 9', description: '...', image: '...'},
          { id: 10, title: 'Audio 10', description: '...', image: '...'},
          { id: 11, title: 'Audio 11', description: '...', image: '...'},
          { id: 12, title: 'Audio 12', description: '...', image: '...'},
          { id: 13, title: 'Audio 13', description: '...', image: '...'},
          { id: 14, title: 'Audio 14', description: '...', image: '...'},
          { id: 15, title: 'Audio 15', description: '...', image: '...'},
          { id: 16, title: 'Audio 16', description: '...', image: '...'},
          { id: 17, title: 'Audio 17', description: '...', image: '...'},
          { id: 18, title: 'Audio 18', description: '...', image: '...'},
          { id: 19, title: 'Audio 19', description: '...', image: '...'},
          { id: 20, title: 'Audio 20', description: '...', image: '...'},
          { id: 21, title: 'Audio 21', description: '...', image: '...'},
          { id: 22, title: 'Audio 22', description: '...', image: '...'},
          { id: 23, title: 'Audio 23', description: '...', image: '...'},
          { id: 24, title: 'Audio 24', description: '...', image: '...'},
          { id: 25, title: 'Audio 25', description: '...', image: '...'},
        ]},
      { title: 'Category 5', items: [
          { id: 1, title: 'Audio 1', description: '...', image: '...' },
          { id: 2, title: 'Audio 2', description: '...', image: '...' },
          { id: 3, title: 'Audio 3', description: '...', image: '...'},
          { id: 4, title: 'Audio 4', description: '...', image: '...'},
          { id: 5, title: 'Audio 5', description: '...', image: '...'},
          { id: 6, title: 'Audio 6', description: '...', image: '...'},
          { id: 7, title: 'Audio 7', description: '...', image: '...'},
          { id: 8, title: 'Audio 8', description: '...', image: '...'},
          { id: 9, title: 'Audio 9', description: '...', image: '...'},
          { id: 10, title: 'Audio 10', description: '...', image: '...'},
          { id: 11, title: 'Audio 11', description: '...', image: '...'},
          { id: 12, title: 'Audio 12', description: '...', image: '...'},
          { id: 13, title: 'Audio 13', description: '...', image: '...'},
          { id: 14, title: 'Audio 14', description: '...', image: '...'},
          { id: 15, title: 'Audio 15', description: '...', image: '...'},
          { id: 16, title: 'Audio 16', description: '...', image: '...'},
          { id: 17, title: 'Audio 17', description: '...', image: '...'},
          { id: 18, title: 'Audio 18', description: '...', image: '...'},
          { id: 19, title: 'Audio 19', description: '...', image: '...'},
          { id: 20, title: 'Audio 20', description: '...', image: '...'},
          { id: 21, title: 'Audio 21', description: '...', image: '...'},
          { id: 22, title: 'Audio 22', description: '...', image: '...'},
          { id: 23, title: 'Audio 23', description: '...', image: '...'},
          { id: 24, title: 'Audio 24', description: '...', image: '...'},
          { id: 25, title: 'Audio 25', description: '...', image: '...'},
        ]},
      { title: 'Category 6', items: [
          { id: 1, title: 'Audio 1', description: '...', image: '...' },
          { id: 2, title: 'Audio 2', description: '...', image: '...' },
          { id: 3, title: 'Audio 3', description: '...', image: '...'},
          { id: 4, title: 'Audio 4', description: '...', image: '...'},
          { id: 5, title: 'Audio 5', description: '...', image: '...'},
          { id: 6, title: 'Audio 6', description: '...', image: '...'},
          { id: 7, title: 'Audio 7', description: '...', image: '...'},
          { id: 8, title: 'Audio 8', description: '...', image: '...'},
          { id: 9, title: 'Audio 9', description: '...', image: '...'},
          { id: 10, title: 'Audio 10', description: '...', image: '...'},
          { id: 11, title: 'Audio 11', description: '...', image: '...'},
          { id: 12, title: 'Audio 12', description: '...', image: '...'},
          { id: 13, title: 'Audio 13', description: '...', image: '...'},
          { id: 14, title: 'Audio 14', description: '...', image: '...'},
          { id: 15, title: 'Audio 15', description: '...', image: '...'},
          { id: 16, title: 'Audio 16', description: '...', image: '...'},
          { id: 17, title: 'Audio 17', description: '...', image: '...'},
          { id: 18, title: 'Audio 18', description: '...', image: '...'},
          { id: 19, title: 'Audio 19', description: '...', image: '...'},
          { id: 20, title: 'Audio 20', description: '...', image: '...'},
          { id: 21, title: 'Audio 21', description: '...', image: '...'},
          { id: 22, title: 'Audio 22', description: '...', image: '...'},
          { id: 23, title: 'Audio 23', description: '...', image: '...'},
          { id: 24, title: 'Audio 24', description: '...', image: '...'},
          { id: 25, title: 'Audio 25', description: '...', image: '...'},
        ]}
    ]);

    return { categories, toggleFavourite, getCategoryColor };
  }
};
</script>

<style lang="scss" scoped>
.items-scroll-area {
  height: 220px; /* Adjust as needed */
}
.my-card {
  width: 200px; /* Adjust as needed */
}
.my-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(0.95);
}
</style>
