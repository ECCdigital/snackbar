<template>
  <q-page class="q-pa-md">
    <q-scroll-area style="height: 100vh; max-width: 100vw;">
      <div v-if="favorites.length > 0" class="row no-wrap q-gutter-sm">
        <q-item
          v-for="item in favorites"
          :key="item.id"
          style="width: 300px; margin: 0px"
        >
          <q-card class="my-card" @click="handleClick(item)">
            <q-card-section :class="['my-card-title', getStripeClass(item.categories)]">
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
              <q-separator spaced/>
              <div class="text-caption text-grey">{{ item.description }}</div>
              <q-separator spaced/>
              <div class="text-dark">{{ item.speaker }}</div>
              <div class="text-dark">{{ item.duration }}</div>
            </q-card-section>
          </q-card>
        </q-item>
      </div>

      <div v-else class="empty-state q-pa-lg flex flex-center">
        <div class="text-center">
          <q-icon name="favorite_border" size="4em" color="grey-5" />
          <div class="text-h6">Noch keine Favoriten vorhanden</div>
          <div class="text-body2">Erkunde die Audiothek und speichere hier deine Favoriten.</div>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useFavoritesStore } from 'stores/favorites';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const favoriteStore = useFavoritesStore();
    const { favorites } = storeToRefs(favoriteStore);
    const router = useRouter();

    const handleClick = (item) => {
      favoriteStore.setCurrentAudio(item);
      router.push({ name: 'AudioPlayerPage' });
    };

    const toggleFavourite = (item) => {
      if (favoriteStore.isFavorite(item.id)) {
        favoriteStore.removeFavorite(item.id);
      } else {
        favoriteStore.addFavorite(item);
      }
    };

    const getStripeClass = (itemCategories) => {
      if (!itemCategories || itemCategories.length === 0) {
        return 'bg-grey-3';
      }

      const matchingSubCategories = subCategories.value.filter(subCategory =>
        itemCategories.includes(subCategory.title)
      );

      const gradientStops = matchingSubCategories.map((subCategory, index) => {
        const color = `bg-${subCategory.color}-1`;
        const startPercent = (100 / matchingSubCategories.length) * index;
        const endPercent = (100 / matchingSubCategories.length) * (index + 1);
        return `${color} ${startPercent}%, ${color} ${endPercent}%`;
      }).join(', ');

      return `linear-gradient(90deg, ${gradientStops})`;
    };

    return {
      favorites,
      handleClick,
      toggleFavourite,
      getStripeClass
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
