<template>
  <div v-if="product">{{ product.title }}<img :src="product.image" /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Product } from "~~/types";
export default defineComponent({
  async setup() {
    const { id } = useRoute().params;
    const uri = "https://fakestoreapi.com/products/" + id;
    const { data: product } = await useFetch<Product>(uri);
    return { id, product };
  },
});
</script>

<style scoped></style>
