<template>
  <div>
    <NuxtLink :to="`/products/${product.id}`"
      >{{ product.title }}<img :src="product.image"
    /></NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
