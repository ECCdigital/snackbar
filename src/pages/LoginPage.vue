<template>
  <q-page class="flex flex-center">
    <div>
      <q-input v-model="username" label="Username" />
      <q-input v-model="password" label="Password" type="password" />
      <q-btn label="Login" @click="handleLogin" />
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter(); // Get router instance

    const handleLogin = () => {
      // Perform your login logic here (e.g., API call, validation)
      // ...

      // If login is successful, navigate to LibraryPage
      router.push({ name: 'LibraryPage' });
    };

    return { username, password, handleLogin };
  }
};
</script>

<style scoped>

</style>
