<template>
  <article class="p-3 mb-4 rounded-lg sm:flex sm:items-center">
    <!-- Info -->
    <section class="text-center sm:flex-1 sm:text-left">
      <h2 class="text-xl sm:leading-6 sm:text-2xl">
        {{ idea.name }}
      </h2>
      <small>{{ idea.userName }}</small>
    </section>

    <!-- Vote -->
    <section
      class="pt-3 border-t-2 mt-6 border-black 
          sm:pt-0 sm:pl-3 sm:border-t-0 sm:border-l-2 sm:mt-0 sm:flex sm:items-center"
    >
      <h3 class="text-3xl font-bold text-center">
        {{ idea.votes }}
      </h3>
      <nav v-if="user" class="flex justify-center sm:block">
        <img
          @click="voteIdea(true)"
          class="w-10 cursor-pointer"
          src="@/assets/img/arrow.svg"
          alt="Vote up"
        />
        <img
          @click="voteIdea(false)"
          class="w-10 cursor-pointer transform rotate-180"
          src="@/assets/img/arrow.svg"
          alt="Vote down"
        />
      </nav>
    </section>
  </article>
</template>

<script>
import { computed } from "vue";
export default {
  name: "AppIdea",
  emits: ["vote-idea"],
  props: {
    idea: {
      type: Object,
      required: true
    },
    user: {
      type: [Object, null]
    }
  },
  setup(props, { emit }) {
    const voteIdea = type => emit("vote-idea", { type, id: props.idea.id });
    const userVoted = computed(() => {
      if (props.user.votes) {
        return props.user.votes.find(item => item === props.idea.id);
      }
    });
    return { voteIdea, userVoted };
  }
};
</script>
