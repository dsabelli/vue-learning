<template>
  <div>
    <h2>Products</h2>
    <div class="grid grid-cols-4 gap-5">
      <div class="" v-if="products" v-for="p in products">
        <Card :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from "~~/types";
definePageMeta({ layout: "products" });
useHead({ title: "First App | Products" });
const { data: products } = await useFetch<Product[]>(
  "https://fakestoreapi.com/products"
);
</script>

<style scoped></style>
