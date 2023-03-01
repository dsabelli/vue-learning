<script lang="ts">
import { defineComponent, ref } from "vue";
import { useTaskStore } from "../stores/TaskStore";
import TaskDetails from "../components/TaskDetails.vue";
import TaskForm from "@/components/TaskForm.vue";
import { storeToRefs } from "pinia";

export default defineComponent({
  components: { TaskDetails, TaskForm },

  setup() {
    const taskStore = useTaskStore();
    const fav = ref(false);
    taskStore.getTasks();
    const { tasks, isLoading, favs, totalCount, favCount } =
      storeToRefs(taskStore);
    return { taskStore, fav, tasks, isLoading, favs, totalCount, favCount };
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
      <p>{{ fav ? `${favCount} fav` : totalCount }} tasks to do</p>
      <div v-if="fav" v-for="task in favs">
        <TaskDetails :task="task" />
      </div>
      <div v-else v-for="task in tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
    <TaskForm />

    <button @click="taskStore.$reset">Reset State</button>
  </main>
</template>

<style scoped></style>
