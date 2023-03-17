<script setup lang="ts">

defineProps({
  image: String,
  title: String,
  text: String
})

</script>

<template>
  <li class="flex max-w-xl">
    <div class="w-14 h-14">
      <img
        class="w-13 h-13"
        :src="`../../../src/assets/icons/${image}.png`">
    </div>
    <div class="pl-4">
      <h4 class="text-2xl">
        {{ title }}
      </h4>
      <p class="pt-1 text-gray-500">
        {{ text }}
      </p>

    </div>
  </li>

</template>
