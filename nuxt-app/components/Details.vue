<template>
  <div>
    <p>{{ product.description }}</p>
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
