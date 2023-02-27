<template>
  <div>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2></router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export interface Job {
  title: string;
  id: number;
  details: string;
}
export default defineComponent({
  data() {
    return {
      jobs: [
        { title: "Developer", id: 1, details: "lorem" },
        { title: "Designer", id: 2, details: "lorem" },
        { title: "DevOps", id: 3, details: "lorem" },
      ] as Job[],
    };
  },
});
</script>

<style scoped></style>
