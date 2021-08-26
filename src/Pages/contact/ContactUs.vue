<template>
  <headline
    imgSource="contact-bg.jpg"
    currentLink="/contact-us"
    currentPageName="Contact Us"
  ></headline>
<contact-form/>
<promotion-card/>
</template>
<script>
import  Headline from "@/components/headline/Headline.vue";
import PromotionCard from '@/components/promotionCard/PromotionCard.vue';
import ContactForm from './sections/ContactForm.vue'
export default {
  components: { Headline, PromotionCard,ContactForm },
  name: "ContactUs",
};
</script>
