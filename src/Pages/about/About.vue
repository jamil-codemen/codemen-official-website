<template>
    <!--=================================================
        Start Bradclumb
    ==================================================-->
        <headline imgSource="contact-bg.jpg" currentLink="/about" currentPageName="About Us"></headline>

    <!--=================================================
        End Bradclumb
    ==================================================-->


    <!--=================================================
         Start Who we are section
    ================================================= -->
<success-story />

    <!--=================================================
         End Who we are section
    ================================================= -->


    <!--=================================================
         Start Who we are section
    ================================================= -->
    <the-company />
    <!--=================================================
         End Who we are section
    ================================================= -->



    <!--=================================================
         Start Video section
    ================================================= -->
    <section id="video" class="my-20 ">
            <div class="container max-w-screen-xl mx-auto md:px-6 px-4">
                <div class="w-full">
                    <div class="flex flex-wrap justify-center ">
                        <p class="top-content uppercase text-green-500 font-bold text-lg pb-6">Introduction Video</p>
                    </div>
                    <h2 class="text-center uppercase leading-loose  md:leading-tight title text-4xl font-black text-gray-700 mt-1.5">Advisory <span class="prm-color rounded px-4 pb-3 pt-2"><span class="text-white">Performance</span></span></h2>
                </div>
                <div class="">
                    <div class="text-gray-700 py-8 text-center">
                        <p class="text-xl">Financial executives need to review their strategies, operating models and capabilities so that their <br>areas can generate sound information for better decision making.</p>
                    </div>
                </div>
                <div class="text-center mt-6">
                    <div class="relative flex items-center justify-center">
                        <a href="https://vimeo.com/222990241" class="">
                            <img src="../../assets/images/video-1.jpg" class="fit-image" alt="Introduction Video">
                        </a>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 sm:h-40 sm:w-40 text-green-500 absolute" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
</svg>
                    </div>
                </div>
                <div class="flex justify-center mt-16">
                    <button
                        class="py-4 pl-8 pr-2 rounded flex justify-center  sm:w-52 w-full bg-green-500 font-bold text-white items-center">
                        <a class="mr-6 md:text-lg text-md uppercase leading-8" href="javascript:;">Join Now</a>                            
                    </button>
                </div>
                
            </div>
        </section>
    <!--=================================================
         End Video section
    ================================================= -->
</template>
<script lang="ts">
import Headline from '@/components/headline/Headline.vue'
import SuccessStory from './sections/SuccessStory.vue'
import TheCompany from './sections/TheCompany.vue'
export default {
  components: { Headline, SuccessStory, TheCompany },
    name:"About",
    component:{
        SuccessStory,
        TheCompany
    }
}
</script>
<style scoped>
.prm-color{
    background-color:#113335;
}
</style>