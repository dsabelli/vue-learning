<template>
  <div>
    <button @click="start">Play</button>
    <Block v-if="isPlaying" :delay="delay" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Block from "@/components/Block.vue";
import { is } from "@babel/types";

export default defineComponent({
  components: { Block },
  methods: {
    start() {
      this.delay = 2000 + Math.floor(Math.random() * 5000);
      this.isPlaying = true;
    },
  },
  data() {
    return {
      isPlaying: false,
      delay: 0,
    };
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
