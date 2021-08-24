<template>
        <section class="md:px-24 px-0 py-24">
        <div class="container max-w-screen-xl mx-auto md:px-6 px-4">
                <div class="text-center">
                    <div class="w-full space-y-6">
                        <h2 class="font-bold text-4xl text-gray-800">We Are <span class="prm-color rounded text-white px-4 pb-4 pt-2">Expert</span></h2>
                        <p class="text-gray-700">We work intensively in search of ideals that can add up in the lives of our customers. <br>This is what moves us and we are grateful for the recognition.</p>
                    </div>
                </div> 
                <div class="row">   
                    <div class="mt-16 px-4 w-full lg:w-1/3 md:w-1/2 mx-auto">
                        <skill-card imgSource="go.png" languageName="Go Lang"></skill-card>
                    </div>
                    <div class="mt-16 px-4 w-full lg:w-1/3 md:w-1/2 mx-auto">
                        <skill-card imgSource="vuejs.png" languageName="Vue JS"></skill-card>
                    </div>
                    <div class="mt-16 px-4 w-full lg:w-1/3 md:w-1/2 mx-auto">
                        <skill-card imgSource="laravel.png" languageName="Laravel"></skill-card>
                    </div>
                </div>  
                <div class="pt-16 flex justify-center">
                     <custom-button buttonClass="bg-green-500 font-bold text-white" isLink=true content="See More"></custom-button>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import CustomButton from '@/components/button/CustomButton.vue'
import SkillCard from '../components/SkillCard.vue'

export default {
  components: { SkillCard, CustomButton },
    name:"ExpertSection"
}
</script>
<style scoped>
.prm-color{
    background-color:#113335;
}
</style>