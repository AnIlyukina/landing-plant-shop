<script setup lang="ts">
import UIButton from "./UIButton.vue";

</script>

<template>
  <div class="w-[250px] height-[71px] bg-gray-500 m-auto mt-3 rounded-full flex justify-between">
    <input
      class="rounded-full bg-transparent px-2"
      type="text"
    />
    <u-i-button>
      <img
        class="w-3"
        src="../../../src/assets/icons/search.png"
      >
    </u-i-button>
  </div>
</template>

