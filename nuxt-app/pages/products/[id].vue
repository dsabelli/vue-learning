<template>
  <div>
    {{ id }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const { id } = useRoute().params;

    return { id };
  },
});
</script>

<style scoped></style>
