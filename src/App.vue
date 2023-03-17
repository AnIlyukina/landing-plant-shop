<script setup lang="ts">
import HeaderPage from "./components/Header.vue";
import Introduction from "./components/Introduction.vue";
import UIGradient from "./components/UI/UIGradient.vue";
import AboutServices from "./components/ServiceItems.vue";
import BestProducts from "./components/BestProducts.vue";
import Cover from "./components/Cover.vue";
import Interior from "./components/Interior.vue";
import Memo from './components/Memo.vue'
import FooterPage from './components/Footer.vue'

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
  <memo/>
  <div
    class="bg-gradient-to-r from-[#566270] to-[#283444]"
  >
    <footer-page/>
  </div>
</template>

