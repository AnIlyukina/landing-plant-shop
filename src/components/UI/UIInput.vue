<script setup lang="ts">
import UIButton from "./UIButton.vue";

</script>

<template>
  <div class="w-[450px] border border-white  height-[71px] border-solid bg-gray-500 m-auto rounded-full flex justify-between">
    <input
      class="w-[90%] rounded-full bg-transparent px-5 focus:outline-none"
      type="text"
    />
    <u-i-button>
      <img
        class="w-4"
        src="../../../src/assets/icons/search.png"
      >
    </u-i-button>
  </div>
</template>

