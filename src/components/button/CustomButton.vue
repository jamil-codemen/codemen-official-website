<template>
  <router-link
    v-if="isLink"
    to="#"
    custom
  >
    <div
      class="py-4 px-8 rounded sm:w-52 w-full text-center" :class="buttonClass"
    >
      <a :href="linkAddress" target="_blank" class="md:text-lg text-md uppercase leading-8">{{ content }}</a>
    </div>
  </router-link>
  <button
    v-else
    class="py-4 px-8 rounded sm:w-52 w-full text-center"
    :class="buttonClass"
  >
    <span class="md:text-lg text-md uppercase leading-8">{{ content }}</span>
  </button>
</template>
<script>
export default {
  name: "CustomButton",
  props: {
    buttonClass: String,
    isLink: Boolean,
    linkAddress: String,
    content: String,
  },
};
</script>
<style scoped>
</style>