<template>
  <!-- Main container -->
  <div class="container mx-auto p-4">
    <!-- Main box -->
    <div class="w-full bg-gray-100 shadow-lg p-4 rounded-lg">
      <h1 class="mb-5 text-4xl text-center">IdeaBox</h1>

      <!-- Add Idea -->
      <section class="mb-6">
        <form class="sm:flex">
          <input
            class="w-full p-3 sm:flex-auto"
            type="text"
            required
            placeholder="Add your idea"
          />
          <input
            v-if="user"
            class="w-full p-2 bg-gray-600 text-white sm:flex-1"
            type="submit"
            value="Add idea"
          />
        </form>
        <p class="user-actions" v-if="!user">
          Please
          <a @click="doLogin" href="#">login</a>
          first
        </p>
        <p class="user-actions" v-else>
          Hi 👋 {{ user.displayName }}.
          <a @click="doLogout" href="#">Logout</a>.
        </p>
      </section>
      <!-- End of Add Idea -->
      <AppIdea v-for="(idea, $index) in ideas" :key="$index" :idea="idea" />
      <!-- Idea item -->

      <!-- End of Idea item -->
    </div>
    <!-- End of main box -->
  </div>
  <!-- End of main container -->
</template>

<script>
import AppIdea from "@/components/AppIdea.vue";
import seed from "@/seed.json";
import { ref } from "vue";
import { auth, firebase } from "@/firebase.js";
export default {
  name: "App",
  setup() {
    const ideas = ref(seed.ideas);

    let user = ref(null);
    auth.onAuthStateChanged(async auth => (user.value = auth ? auth : null));

    const doLogin = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
        await auth.signInWithPopup(provider);
      } catch (error) {
        console.error(error);
      }
    };

    const doLogout = async () => {
      try {
        await auth.signOut();
      } catch (error) {
        console.error(error);
      }
    };

    return { ideas, user, doLogin, doLogout };
  },
  components: {
    AppIdea
  }
};
</script>

<style>
.user-actions {
  @apply mt-2 text-center;
}

.user-actions a {
  font-weight: bold;
  text-decoration: underline;
}
</style>
