<template>
  <div>
    <h1>{{ taskStore.tasks[0].title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTaskStore } from "../stores/TaskStore";
const taskStore = useTaskStore();

export default defineComponent({
  setup() {
    return { taskStore };
  },
});
</script>

<style scoped></style>
