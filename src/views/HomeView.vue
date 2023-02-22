<script lang="ts">
import { defineComponent, ref } from "vue";
import { useTaskStore } from "../stores/TaskStore";
import TaskDetails from "../components/TaskDetails.vue";
import TaskForm from "@/components/TaskForm.vue";

export default defineComponent({
  components: { TaskDetails, TaskForm },

  setup() {
    const taskStore = useTaskStore();
    const fav = ref(false);
    return { taskStore, fav };
  },
});
</script>

<template>
  <main>
    <header>
      <h1>Pinia Tasks</h1>
    </header>
    <div class="class-list">
      <button
        class="py-2 px-6 bg-blue-600 rounded-md font-bold text-white"
        @click="fav = !fav"
      >
        {{ fav ? "Show all" : "Show favs" }}
      </button>
      <p>
        {{ fav ? `${taskStore.favCount} fav` : taskStore.totalCount }} tasks to
        do
      </p>
      <div v-if="fav" v-for="task in taskStore.favs">
        <TaskDetails :task="task" />
      </div>
      <div v-else v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
    <TaskForm />
  </main>
</template>

<style scoped></style>
