<template>
  <div>
    <p>Reaction time {{ score }}ms</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["score"],
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
