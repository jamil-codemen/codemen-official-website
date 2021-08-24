<template>
   <div class="">
     <top-banner></top-banner>
    <expert-section></expert-section>
    <about-us-section></about-us-section>

      <!--=================================================
         Start Our Team section
    ================================================= -->
    <!-- <section id="our_team" class="md:px-24 px-0 py-24">
        <div class="container max-w-screen-xl mx-auto md:px-6 px-4">
            <div class="">
                <div class="title text-center">
                    <div class="w-full space-y-6">
                        <h2 class="font-bold text-4xl text-gray-800">Our <span class="prm-color rounded px-4 pb-3 pt-2 text-white">Team</span></h2>
                        <p class="text-gray-700">We work intensively in search of ideals that can add up in the lives of our customers. <br>This is what moves us and we are grateful for the recognition.</p>
                    </div>
                </div> 
                <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-8">   
                    <div class="group mt-16 ">
                        <div class="relative">
                            <div class="bg-green-50 w-full h-full overflow-hidden">
                                <img class="bg-bottom transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src="../../../assets/images/full_imagemen.png" alt="">
                            </div>
                            <div class="text-center pt-6">
                                <p class="font-semibold text-3xl">FORHAD HOSSEN</p>
                                <p class="">Web Developer</p>
                            </div>            
                        </div>            
                    </div>
                    <div class="group mt-16 ">
                        <div class="relative">
                            <div class="bg-green-50 w-full h-full overflow-hidden">
                                <img class="bg-bottom transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src="../../../assets/images/full_imagemen.png" alt="">
                            </div>
                            <div class="text-center pt-6">
                                <p class="font-semibold text-3xl">FORHAD HOSSEN</p>
                                <p class="">Web Developer</p>
                            </div>            
                        </div>            
                    </div>
                    <div class="group mt-16 ">
                        <div class="relative">
                            <div class="bg-green-50 w-full h-full overflow-hidden">
                                <img class="bg-bottom transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src="../../../assets/images/full_imagemen.png" alt="">
                            </div>
                            <div class="text-center pt-6">
                                <p class="font-semibold text-3xl">FORHAD HOSSEN</p>
                                <p class="">Web Developer</p>
                            </div>            
                        </div>            
                    </div>
                    <div class="group mt-16 ">
                        <div class="relative">
                            <div class="bg-green-50 w-full h-full overflow-hidden">
                                <img class="bg-bottom transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src="../../../assets/images/full_imagemen.png" alt="">
                            </div>
                            <div class="text-center pt-6">
                                <p class="font-semibold text-3xl">FORHAD HOSSEN</p>
                                <p class="">Web Developer</p>
                            </div>            
                        </div>            
                    </div>
                </div>
                <div class="mt-16 flex flex-wrap justify-center">
                    <button class="hover:bg-gray-900 py-4 pl-8 pr-2 rounded flex flex-wrap justify-center  sm:w-52 w-full bg-green-500 font-bold text-white items-center">
                        <a class="mr-6 md:text-lg leading-8" href="team.html">See More</a>                            
                    </button>
                </div>                        
            </div>
        </div>
    </section> -->
    <!--=================================================
         End Our Team section
    ================================================= -->



    <!--=================================================
         Start Promotional section
    ================================================= -->
    <!-- <section id="our_team" class="md:px-24 px-0 pb-24">
        <div class="container max-w-screen-xl mx-auto md:px-6 bg-green-200 py-14 my-4 rounded">
            <div class="text-center">
                <h2 class="py-6 font-bold text-4xl">Codemen unlocks your financial potential</h2>
                <p class="py-2 text-gray-700 text-xl">Through our platform, you can access a network of APIs, banks and other financial<br> institutions easily. Ready to start your journey with us?</p>
                <div class="mt-4 sm:mx-0 mx-4">
                    <button class="hover:bg-gray-900 py-4 pl-8 pr-2 rounded justify-center  sm:w-52 w-full bg-green-500 font-bold text-white items-center">
                        <a class="mr-6 md:text-lg leading-8" href="javascript:;">Get Started</a>                            
                    </button>
                </div>  
            </div>
        </div>
    </section> -->
    <!--=================================================
         End Promotional section
    ================================================= -->
   </div>
</template>
<script>
import CustomButton from '@/components/button/CustomButton.vue'
import TopBanner from './sections/TopBanner.vue'
import SkillCard from './components/SkillCard.vue'
import ExpertSection from './sections/ExpertSection.vue'
import AboutUsSection from './sections/AboutUsSection.vue'


export default {
  components: { CustomButton, TopBanner, SkillCard, ExpertSection, AboutUsSection },
    name:"homepage",
    
}
</script>
<style scoped>
.prm-color{
    background-color:#113335;
}
</style>