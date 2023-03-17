<script setup lang="ts">

import CommonItem from "./items/CommonItem.vue";
</script>

<template>
  <ul
    class="max-w-main m-auto p-16 flex justify-between"
  >
    <!-- 1 -->
    <common-item
      image="delivery"
      title="Free Shapping"
      text="No change for each delivery"
    />
    <!-- 2 -->
    <common-item
      image="payment"
      title="Quick Payment"
      text="100% secure payment"
    />
    <!-- 3 -->
    <common-item
      image="support"
      title="24/7 Support"
      text="Quick support"
    />
  </ul>

</template>
