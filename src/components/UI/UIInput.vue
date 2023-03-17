<script setup lang="ts">
import UIButton from "./UIButton.vue";

</script>

<template>
  <div class="max-w-lg border border-white  height-[71px] border-solid bg-gray-500 m-auto rounded-full flex justify-between">
    <input
      placeholder="Enter your email"
      class="w-[90%] rounded-full bg-transparent px-5 focus:outline-none"
      type="text"
    />
    <u-i-button>
      <slot/>
    </u-i-button>
  </div>
</template>

