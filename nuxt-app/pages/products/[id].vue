<template>
  <Head
    ><Title>{{ product ? product.title : "Product" }}</Title></Head
  >
  <div v-if="product">
    {{ product.title }}<img :src="product.image" /><Details
      :product="product"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Product } from "~~/types";
export default defineComponent({
  async setup() {
    const { id } = useRoute().params;
    const uri = "https://fakestoreapi.com/products/" + id;
    const { data: product } = await useFetch<Product>(uri);
    if (!product.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
        fatal: true,
      });
    }
    return { id, product };
  },
});
</script>

<style scoped></style>
