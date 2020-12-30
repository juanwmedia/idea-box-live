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

      <!-- Idea item -->
      <article class="p-3 rounded-lg bg-gray-300 sm:flex sm:items-center">
        <!-- Info -->
        <section class="text-center sm:flex-1 sm:text-left">
          <h2 class="text-xl sm:leading-6 sm:text-2xl">
            This is an idea title and must be collapsed on another row
          </h2>
          <small>Username</small>
        </section>

        <!-- Vote -->
        <section
          class="pt-3 border-t-2 mt-6 border-black 
          sm:pt-0 sm:pl-3 sm:border-t-0 sm:border-l-2 sm:mt-0 sm:flex sm:items-center"
        >
          <h3 class="text-3xl font-bold text-center">99</h3>
          <nav class="flex justify-center sm:block">
            <img
              class="w-10 cursor-pointer"
              src="@/assets/img/arrow.svg"
              alt="Vote up"
            />
            <img
              class="w-10 cursor-pointer transform rotate-180"
              src="@/assets/img/arrow.svg"
              alt="Vote down"
            />
          </nav>
        </section>
      </article>
      <!-- End of Idea item -->
    </div>
    <!-- End of main box -->
  </div>
  <!-- End of main container -->
</template>

<script>
export default {
  name: "App"
};
</script>
