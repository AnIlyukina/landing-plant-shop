<script setup lang="ts">

import ProductItem from "./items/ProductItem.vue";
</script>

<template>
  <div class="flex max-w-main m-auto p-16 items-center">
    <div>
      <h2 class="text-5xl">
        Best Seller Product
      </h2>
      <router-link
        class="flex items-center pt-4"
        to="/shop">
        <p>
          See all collection
        </p>
        <img
          class="w-5 h-4 ml-3"
          src="../../src/assets/icons/right-arrow.png">
      </router-link>
    </div>
    <div class="flex pl-12">
      <product-item/>
      <product-item/>
      <product-item
        class="lg:flex hidden"
      />
      <product-item
        class="2xl:flex hidden"
      />
      <product-item
        class="3xl:flex hidden"
      />
    </div>
  </div>

</template>
