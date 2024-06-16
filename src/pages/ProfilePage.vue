<script setup>

</script>

<template>
  <q-page class="q-pa-md bg-grey-1">
    <q-card class="bg-grey-3">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-h6">John Doe</q-item-label>
          <q-item-label caption>@johndoe</q-item-label>
        </q-item-section>
      </q-item>

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nulla vitae mauris ac nulla dictum volutpat.
      </q-card-section>

      <q-separator />

      <q-list dense>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="email" />
          </q-item-section>
          <q-item-section>johndoe@example.com</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="phone" />
          </q-item-section>
          <q-item-section>+1 (123) 456-7890</q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-page>
</template>

<style scoped>

</style>
