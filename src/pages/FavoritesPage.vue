<template>
  <q-page class="q-pa-md">
      <div class="empty-state q-pa-lg flex flex-center">
        <div class="text-center">
          <q-icon name="favorite_border" size="4em" color="grey-5" />
          <div class="text-h6">No favorites yet</div>
          <div class="text-body2">Explore the library and add your favorite audio clips here.</div>
        </div>
      </div>
  </q-page>
</template>

<script>

</script>

<style lang="scss" scoped>
/* Same styles as LibraryPage */

.empty-state {
  background-color: $grey-2;
  border-radius: 8px;
}
</style>
