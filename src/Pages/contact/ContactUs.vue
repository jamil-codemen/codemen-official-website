<template>
  <headline
    imgSource="contact-bg.jpg"
    currentLink="/contact-us"
    currentPageName="Contact Us"
  ></headline>
  <contact-form/>
<div class="md:px-24 px-0 pb-24 mt-16">
      <promotion-card></promotion-card>
    </div>
</template>
<script>
import Headline from "@/components/headline/Headline.vue";
import PromotionCard from "@/components/promotionCard/PromotionCard.vue";
import ContactForm from "./sections/ContactForm.vue";
import CustomInputField from "@/components/customInputField/customInputField.vue";
import CustomButton from '@/components/button/CustomButton.vue';
export default {
  components: { Headline, PromotionCard, ContactForm, CustomInputField, CustomButton },
  name: "ContactUs",
};
</script>
