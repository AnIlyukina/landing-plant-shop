<script setup lang="ts">


import UIInput from "./UI/UIInput.vue";
</script>

<template>
  <div class="max-w-main m-auto p-16 text-white">

    <div
      class="border-b border-white flex "
    >
      <div>
        <h2 class="text-3xl">
          Newslatter
        </h2>
        <div class="mt-6">
          <u-i-input>
            Subscribe
          </u-i-input>
        </div>
      </div>
      <div class="flex-1 grid grid-cols-4 ml-28">
        <div>
          <h6 class="font-bold">
            Support
          </h6>
          <ul class="mt-4 mb-10">
            <li class="py-1">
              About us
            </li>
            <li class="py-1">
              Carrers
            </li>
            <li class="py-1">
              Blog
            </li>
          </ul>
        </div>
        <div>
          <h6 class="font-bold">
            Useful Link
          </h6>

          <ul class="my-5 mb-10">
            <li class="py-1">
              Payment & Tax
            </li>
            <li class="py-1">
              Team of Service
            </li>
            <li class="py-1">
              Privaci Policy
            </li>
          </ul>

        </div>
        <div>
          <h6 class="font-bold">
            Our Menu
          </h6>
          <ul class="my-5 mb-10">
            <li class="py-1">
              Best Product
            </li>
            <li class="py-1">
              Category
            </li>
          </ul>
        </div>
        <div>
          <h6 class="font-bold">
            Address
          </h6>
          <ul class="my-5 mb-10">
            <li class="py-1">
              JL. Setiabudhi No. 193 Sukasari, Bandung
              West Java, Indonesia
            </li>
            <li class="py-1">
              hallo@daunku.com
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div class="mt-3">
      <p class="text-center">
        © 2022 Daunku - All rights reserved.
      </p>
    </div>
  </div>

</template>

