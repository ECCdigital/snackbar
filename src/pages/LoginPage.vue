<template>
  <q-page class="bg-grey-1 flex flex-center q-pa-md">
    <q-card class="bg-grey-3 q-pa-sm q-ma-xl">
      <q-card-section>
        <q-img src="../assets/snackbar_logo_nobg.png" class="full-width"/>
      </q-card-section>
      <q-card-section class="items-center">
        <q-input v-model="username" label="Benutzername"
                 :rules="[ val => val && val.length > 0 || 'Bitte Benutzernamen eingeben']"/>
        <q-input v-model="password" label="Passwort" type="password"
                 :rules="[ val => val && val.length > 0 || 'Bitte Passwort eingeben']"/>
        <q-btn v-ripple
               label="Login"
               @click="handleLogin"/>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import NotifyService from "src/services/NotifyService";
import {api} from "boot/axios";
import {useUserStore} from "stores/user";

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();

    const handleDevLogin = async () => {
      try {
        const response = await api.post('/auth/dev', {username: username.value});

        if (response.status === 200) {
          await router.push({name: 'HomePage'});
          NotifyService.success('Login successful');
        } else {
          NotifyService.error('Login failed. Please check your credentials.');
        }
      } catch (error) {
        console.error('Login failed:', error);
        NotifyService.error('Login failed. Please check your credentials.');
      }
    };

    const handleLogin = async () => {
      try {
        const userStore = useUserStore();
        console.log('Sending login request:', {
          url: '/auth/login',
          data: {username: username.value, password: password.value}
        });
        const response = await api.post('/auth/login', {username: username.value, password: password.value});

        await userStore.setUserId(response.data.user.id);
        await router.push({name: 'HomePage'});
        NotifyService.success('Login successful');
      } catch (error) {
        NotifyService.error('Login failed. Please check your credentials.');
      }
    };

    return {username, password, handleLogin, handleDevLogin};
  }
};
</script>
