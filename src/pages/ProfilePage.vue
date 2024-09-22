<template>
  <q-page class="flex flex-center">
    <q-card v-if="user" class="bg-grey-3" style="width: min(400px)">
      <q-card-section>
        <div class="text-h6 text-dark">Profil</div>
      </q-card-section>
      <q-separator spaced inset/>
      <q-item>
        <q-item-section avatar>
          <q-avatar icon="person" size="xl"/>
        </q-item-section>
        <q-item-section>
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
        </q-item-section>
      </q-item>
    </q-card>
    <div v-else>No valid user profile found.</div>
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
        console.log('user:', user);
        console.log('users:', users)

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
