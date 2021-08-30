<template>
        <section class="md:px-24 px-0 py-24">
        <div class="container max-w-screen-xl mx-auto md:px-6 px-4">
            <!-----------------------------------  header section ---------------------------------------------------->
                <div class="text-center">
                    <div class="w-full space-y-6">
                        <custom-header headerClass="font-bold text-4xl text-gray-800" firstSpan="We Are " SecondSpan="Expert" blockSecond></custom-header>
                        <p class="text-gray-700">We work intensively in search of ideals that can add up in the lives of our customers. <br>This is what moves us and we are grateful for the recognition.</p>
                    </div>
                </div> 
                <!-----------------------------------  card section ---------------------------------------------------->
                <div class="row"> 
                    <div class="mt-16 px-4 w-full lg:w-1/3 md:w-1/2 mx-auto" v-for="skill in skills" :key="skill.skillName">
                        <skill-card :imgSource="skill.img" :languageName="skill.skillName"></skill-card>
                    </div>  
                </div>  
                <!-----------------------------------  button section ---------------------------------------------------->
                <div class="pt-16 flex justify-center">
                     <custom-button buttonClass="bg-green-500 hover:bg-gray-900 font-bold text-white" isLink content="See More"></custom-button>
            </div>
        </div>
    </section>
</template>
<script>
import CustomButton from '@/components/button/CustomButton.vue'
import SkillCard from '../components/SkillCard.vue'
import CustomHeader from '@/components/customHeader/CustomHeader.vue'

export default {
  components: { SkillCard, CustomButton, CustomHeader },
    name:"ExpertSection",
    data(){
        return{}
    },
    computed:{
        skills(){
            return this.$store.state.skills;
        }
    },
}
</script>
<style scoped>
.prm-color{
    background-color:#113335;
}
</style>