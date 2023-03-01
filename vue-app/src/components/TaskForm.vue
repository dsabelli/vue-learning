<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="I need to..." v-model="newTask" /><button>
      Add
    </button>
  </form>
</template>

<script lang="ts">
import { useTaskStore, type Task } from "@/stores/TaskStore";
import { defineComponent, ref, type Ref } from "vue";

export default defineComponent({
  setup() {
    const taskStore = useTaskStore();
    const newTask: Ref<string> = ref("");
    const handleSubmit = (): void => {
      if (newTask.value.length > 0) {
        taskStore.addTask({
          id: Math.floor(Math.random() * 9999999),
          isFav: false,
          title: newTask.value,
        });
      }
      newTask.value = "";
    };
    return { newTask, handleSubmit };
  },
});
</script>

<style scoped></style>
