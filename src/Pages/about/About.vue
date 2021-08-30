<template>
  <!------------------------------------Bradclumb section------------------------------------------------------>
  <headline
    imgSource="contact-bg.jpg"
    currentLink="/about"
    currentPageName="About Us"
  ></headline>
  <!------------------------------------success story section------------------------------------------------------>
  <success-story />
  <!---------------------------------------who we are section ----------------------------------------------------->
  <the-company />
  <!---------------------------------------vedio section ----------------------------------------------------->
      <vedio-component></vedio-component>
</template>
<script>
import Headline from "@/components/headline/Headline.vue";
import SuccessStory from "./sections/SuccessStory.vue";
import TheCompany from "./sections/TheCompany.vue";
import VedioComponent from '@/components/vedioComponent/VedioComponent.vue';
export default {
  components: { Headline, SuccessStory, TheCompany, VedioComponent },
  name: "About",
  component: {
    SuccessStory,
    TheCompany,
  },
};
</script>
<style scoped>
.prm-color {
  background-color: #113335;
}
</style>