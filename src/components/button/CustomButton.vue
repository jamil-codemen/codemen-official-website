<template>
<!-------------------------------------  link component    -------------------------------------------->
  <router-link
    v-if="isLink"
    to="#"
    custom
  >
    <div
      class="py-4 px-8 rounded sm:w-52 w-full text-center cursor-pointer" :class="buttonClass"
    >
      <a :href="linkAddress" target="_blank" class="md:text-lg text-md uppercase leading-8">{{ content }}</a>
    </div>
  </router-link>
  <!-------------------------------------  button component    -------------------------------------------->
  <button
    v-else
    class="py-4 px-8 rounded sm:w-52 w-full text-center cursor-pointer"
    :class="buttonClass"
    :type="type"
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
    type:String
  },
};
</script>
<style scoped>
</style>