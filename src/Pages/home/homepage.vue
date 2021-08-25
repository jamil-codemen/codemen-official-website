<template>
   <div class="">
     <top-banner></top-banner>
    <expert-section></expert-section>
    <about-us-section></about-us-section>
    <team-section></team-section>
   <promotional-section></promotional-section>
   </div>
</template>
<script>
import CustomButton from '@/components/button/CustomButton.vue'
import TopBanner from './sections/TopBanner.vue'
import SkillCard from './components/SkillCard.vue'
import ExpertSection from './sections/ExpertSection.vue'
import AboutUsSection from './sections/AboutUsSection.vue'
import TeamSection from './sections/TeamSection.vue'
import PromotionalSection from './sections/PromotionalSection.vue'


export default {
  components: { CustomButton, TopBanner, SkillCard, ExpertSection, AboutUsSection, TeamSection, PromotionalSection },
    name:"homepage",
    
}
</script>
<style scoped>
.prm-color{
    background-color:#113335;
}
</style>