<template>
  <div>{{ error.statusCode }}{{ error.message }}</div>
  <button @click="handleError">Clear error</button>
</template>

<script setup lang="ts">
defineProps(["error"]);
const handleError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>
