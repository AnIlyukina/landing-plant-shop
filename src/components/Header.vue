<script setup lang="ts">
import {ref} from "vue"

import NavBar from './NavBar.vue'

let order = ref(null)

</script>

<template>
  <div class="max-w-main m-auto p-16 pt-9 flex justify-between">
    <div class="flex items-center cursor-pointer">
        <img
          class="w-10 h-8"
          src="../../src/assets/icons/logo.png">
        <p class="text-white font-bold text-2xl pl-2">
          Daunku
        </p>
    </div>
    <div class="flex text-white items-center">
      <nav-bar/>
    </div>
    <div
      class="relative cursor-pointer ml-16"
    >
      <img
        class="w-8"
        src="../../src/assets/icons/basket.png">
      <div
        class="absolute top-0.5 -right-1.5  w-4 h-4 text-center text-xs font-bold
        rounded-full bg-gradient-to-r from-gradient-color-1 to-gradient-color-2"
      >
        {{ order ? order.length : 0}}
      </div>
    </div>
  </div>
</template>
