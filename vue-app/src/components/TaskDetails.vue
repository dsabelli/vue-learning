<script lang="ts">
import { useTaskStore } from "@/stores/TaskStore";
import { defineComponent } from "vue";

export default defineComponent({
  props: ["task"],
  setup() {
    const taskStore = useTaskStore();
    return { taskStore };
  },
});
</script>

<template>
  <div class="task">
    <h3 class="mt-4">{{ task.title }}</h3>
    <button @click="taskStore.deleteTask(task.id)">Delete</button>
    <button @click="taskStore.toggleFav(task.id)">Toggle Fav</button>
  </div>
</template>

<style scoped></style>
