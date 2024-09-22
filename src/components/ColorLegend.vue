<template>
  <q-list bordered separator>
    <q-item v-for="item in legendData" :key="item.category">
      <q-item-section avatar>
        <q-icon :name="item.icon || 'square'" :color="item.color" size="md" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ item.category }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import {computed, defineComponent} from "vue";
import LibraryPage from "pages/LibraryPage.vue";



export default defineComponent({
  props: {
    categoryColors: {
      type: Object,
      required: true,
    },
  },

  setup(props) {

    const legendData = computed(() => {
      return Object.keys(props.categoryColors).map((category) => {
        return {
          category,
          color: props.categoryColors[category],
        };
      });
    });

    return {
      legendData,
    };
  },
});

</script>

<style scoped lang="scss">

</style>
