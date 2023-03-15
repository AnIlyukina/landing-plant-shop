<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  link: String
})
</script>

<template>
  <router-link
    :class="[props.link === '/' ? 'text-teal-300' : '', 'px-5 text-base hover:text-teal-300' ]"
    :to="props.link"
  >
    <slot/>
  </router-link>
</template>
<style>

</style>
