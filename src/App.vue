<script setup lang="ts">
import HeaderPage from "./components/HeaderPage.vue";
import Introduction from "./components/Introduction.vue";
import UIGradient from "./components/UI/UIGradient.vue";
import AboutServices from "./components/AboutServices.vue";
import BestProducts from "./components/BestProducts.vue";
import Cover from "./components/Cover.vue";
import Interior from "./components/interior.vue";

</script>

<template>
  <Cover>
    <header-page/>
    <introduction/>
    <u-i-gradient/>
  </Cover>
  <about-services/>
  <best-products/>
  <interior/>

</template>

