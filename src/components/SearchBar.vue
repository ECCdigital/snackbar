<template>
  <div>
    <q-fab
      v-model="fabOpen"
      @click="toggleSearchbar"
      class="fixed-top-right q-ma-sm"
      icon="search"
      direction="down"
    >
      <q-fab-action
        v-model="searchbarOpen"
        @click="toggleSearchbar"
        color="primary"
        icon="search"
        label="Search"
      />
    </q-fab>

    <q-input
      v-if="searchbarOpen"
      v-model="searchQuery"
      class="q-ma-md"
      filled
      label="Search"
      dense
      clearable
    />
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    modelValue: { // v-model
      type: String,
      default: ''
    },
    categories: {
      type: Array,
      required: true
    },
    filterFunction: {
      type: Function,
      default: (category, query) => {
        const queryLower = query.toLowerCase();
        return category.items.some(item =>
          item.title.toLowerCase().includes(queryLower) ||
          item.description.toLowerCase().includes(queryLower)
        );
      }
    }
  },
  emits: ['update:modelValue', 'search-query-changed'],

  setup(props, { emit }) {
    const searchQuery = ref(props.modelValue);
    const fabOpen = ref(false);
    const searchbarOpen = ref(false);

    watch(searchQuery, (newQuery) => {
      emit('update:modelValue', newQuery);
      emit('search-query-changed', newQuery);

      if (!newQuery) {
        fabOpen.value = false;
      }
    });

    const toggleSearchbar = () => {
      searchbarOpen.value = !searchbarOpen.value;
      if (!searchbarOpen.value) {
        searchQuery.value = '';
      }
    };

    return {
      searchQuery,
      fabOpen,
      searchbarOpen,
      toggleSearchbar,
    };
  }
};
</script>
