<script setup lang="ts">

import UIButton from "../UI/UIButton.vue";
</script>

<template>
  <div class="w-[250px] h-[380px] bg-[#C1D0E4] rounded-3xl flex mr-4">

    <div class="w-full h-[50%] bg-white rounded-3xl shadow-md mt-auto p-5 flex flex-col justify-between">
      <div>
        <h6 class="text-2xl">
          Cammile
        </h6>
        <ul class="mt-2 flex">
          <li class="mr-0.5">
            <img
              class="w-4"
              src="../../assets/icons/star.png">
          </li>
          <li class="mr-0.5">
            <img
              class="w-4"
              src="../../assets/icons/star.png">
          </li>
          <li class="mr-0.5">
            <img
              class="w-4"
              src="../../assets/icons/star.png">
          </li>
          <li class="mr-0.5">
            <img
              class="w-4"
              src="../../assets/icons/star.png">
          </li>
          <li class="mr-0.5">
            <img
              class="w-4"
              src="../../assets/icons/star.png">
          </li>
        </ul>
      </div>
      <div class="flex justify-between items-center">
        <div class="text-2xl">
          $
          <span>
            65.00
          </span>
        </div>

        <div>
          <u-i-button>
            <img
              class="w-4 m-1.5"
              src="../../../src/assets/icons/search.png"
            >
          </u-i-button>
        </div>

      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
