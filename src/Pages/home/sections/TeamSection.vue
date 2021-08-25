<template>
        <section class="md:px-24 px-0 py-24">
        <div class="container max-w-screen-xl mx-auto md:px-6 px-4">
            <div class="">
                <div class="title text-center">
                    <div class="w-full space-y-6">
                        <h2 class="font-bold text-4xl text-gray-800">Our <span class="prm-color rounded px-4 pb-3 pt-2 text-white">Team</span></h2>
                        <p class="text-gray-700">We work intensively in search of ideals that can add up in the lives of our customers. <br>This is what moves us and we are grateful for the recognition.</p>
                    </div>
                </div> 
                <div class="row">   
                    <div class="group mt-16 px-4 w-full md:w-1/2 lg:w-1/4">
                        <team-card imgSource="full_imagemen.png" employeeName="Forhad Hosen" employeeRole="Web Developer"></team-card>
                    </div>
                    <div class="group mt-16 px-4 w-full md:w-1/2 lg:w-1/4">
                        <team-card imgSource="full_imagemen.png" employeeName="Forhad Hosen" employeeRole="Web Developer"></team-card>           
                    </div>
                    <div class="group mt-16 px-4 w-full md:w-1/2 lg:w-1/4">
                        <team-card imgSource="full_imagemen.png" employeeName="Forhad Hosen" employeeRole="Web Developer"></team-card>           
                    </div>
                    <div class="group mt-16 px-4 w-full md:w-1/2 lg:w-1/4">
                        <team-card imgSource="full_imagemen.png" employeeName="Forhad Hosen" employeeRole="Web Developer"></team-card>           
                    </div>
                </div>
                <div class="mt-16 flex justify-center">
                        <custom-button buttonClass="bg-green-500 hover:bg-gray-900 font-bold text-white" isLink=true content="See More"></custom-button>
                </div>  
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import CustomButton from '@/components/button/CustomButton.vue'
import TeamCard from '@/components/teamCard/TeamCard.vue'

export default {
  components: { CustomButton, TeamCard },
    name:"TeamSection"
}
</script>
<style scoped>
.prm-color{
    background-color:#113335;
}
</style>