<template>
  <div>
    <button :disabled="isPlaying" @click="start">Play</button>
    <Block v-if="isPlaying" :delay="delay" @end="endGame" />
    <Results v-if="score > 0 && !isPlaying" :score="score" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Block from "@/components/Block.vue";
import Results from "@/components/Results.vue";

export default defineComponent({
  components: { Block, Results },
  methods: {
    start() {
      this.delay = 2000 + Math.floor(Math.random() * 1000);
      this.isPlaying = true;
    },
    endGame(reactionTime: number) {
      this.score = reactionTime;
      this.isPlaying = false;
    },
  },
  data() {
    return {
      isPlaying: false,
      delay: 0,
      score: 0,
    };
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
