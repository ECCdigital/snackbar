<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div class="error-code" aria-label="Fehler 404: Seite nicht gefunden">
        404
      </div>

      <div class="error-message" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'ErrorNotFound'
});
</script>

<style scoped>
.error-code {
  font-size: 20vh; /* Größere Standardschriftgröße */

  @media (max-width: 768px) { /* Anpassung für kleinere Bildschirme */
    font-size: 15vh;
  }
}

.error-message {
  /* Stile für die Fehlermeldung */
}
</style>
