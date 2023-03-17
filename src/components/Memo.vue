<script>
import CommonItem from "./items/CommonItem.vue";
export default {
  components: {CommonItem}
}
</script>

<template>
  <div class="flex max-w-main p-16 m-auto">
    <div>
      <h2 class="text-5xl">
        How to care for plants
      </h2>

      <p class="text-xl mt-3">
        Take care of plants with all your heart
      </p>
      <ul>
        <common-item
          class="mt-7"
          image="lighting"
          title="Adjust Lighting"
          text="When caring for indoor plants? make sure the room temperature
          is neither too cold nor too hot"
        />
        <common-item
          class="mt-7"
          image="watering"
          title="Don't water too often"
          text="Watering ornamental plants indoors does not have to be done every day"
        />
        <common-item
          class="mt-7"
          image="plants"
          title="Don't water too often"
          text="Watering ornamental plants indoors does not have to be done every day"
        />
        <common-item
          class="mt-7"
          image="fertilize"
          title="Fertilize regularly"
          text="The nutrients most indoor houseplants need are
          nitrogen for balance and potassium for stem strength"
        />
      </ul>

    </div>

    <div class="ml-auto flex items-center">
      <img
        class="max-w-xl"
        src="../../src/assets/image/how-to-care.png">

    </div>

  </div>

</template>
