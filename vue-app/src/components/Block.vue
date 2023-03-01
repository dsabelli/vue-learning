<template>
  <div
    @click="stopTimer"
    v-if="showBlock"
    class="w-96 bg-teal-400 p-10 text-black font-bold text-center"
  >
    click me
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: 0,
      reactionTime: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  updated() {},
  unmounted() {},
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit("end", this.reactionTime);
      //   this.showBlock = false;
      console.log(this.reactionTime);
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
