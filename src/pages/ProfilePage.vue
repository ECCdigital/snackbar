<template>
  <q-page class="bg-grey-1 flex flex-center q-pa-md">
    <q-card v-if="user" class="bg-grey-3 q-ma-lg q-pa-sm">
      <q-card-section class="col-grow content-start items-start">
        <div class="text-h6 text-dark">Profil</div>
      </q-card-section>
      <q-separator spaced inset/>
      <q-card-section class="col-grow content-start items-start">
        <q-list>
          <q-item-label header class="text-primary">Nutzerdaten</q-item-label>
          <q-item>
            <q-item-section>
              <q-item-label>Name</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label>{{ user.username }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>E-Mail</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label>{{ user.email }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item-label header class="text-primary">Optionen</q-item-label>
          <q-item>
            <q-btn
              label="Passwort ändern"
            />
          </q-item>
          <q-item>
            <q-btn
              @click="handleLogout"
              label="Logout"
            />
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
    <div class="text-h5 text-dark text-center" v-else>No valid user profile found.</div>
  </q-page>
</template>

<script>
import {onMounted} from 'vue';
import {useRouter} from "vue-router";
import {useAuthStore} from "stores/auth";
import {useUserStore} from "stores/user";
import {storeToRefs} from "pinia";

export default {
  setup() {
    const authStore = useAuthStore();
    const userStore = useUserStore();
    const router = useRouter();
    const {user} = storeToRefs(userStore);
    const {users} = storeToRefs(userStore);

    onMounted(async () => {
      try {
        await userStore.fetchUser();
        await userStore.fetchUsers();

      } catch (error) {
        console.error('Error in setup:', error);
      }
    });

    const handleLogout = () => {
      authStore.logout();
      router.push({name: 'LoginPage'});
    };

    return {handleLogout, authStore, userStore, user, users};
  },
};

</script>

<style scoped>

</style>
