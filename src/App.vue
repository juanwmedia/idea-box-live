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
            class="w-full p-2 bg-gray-600 text-white sm:flex-1"
            type="submit"
            value="Add idea"
          />
        </form>
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
export default {
  name: "App",
  setup() {
    const ideas = ref(seed.ideas);
    return { ideas };
  },
  components: {
    AppIdea
  }
};
</script>
