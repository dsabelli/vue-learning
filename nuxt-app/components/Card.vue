<template>
  <div>
    <NuxtLink :to="`/products/${product.id}`"
      >{{ product.title }}<img :src="product.image"
    /></NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { Product } from "~~/types";
interface Props {
  product: Product;
}
const props = defineProps<Props>();
</script>

<style scoped></style>
