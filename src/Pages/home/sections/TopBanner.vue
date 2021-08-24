<template>
        <div class="relative">        
            <img src="../../../assets/images/bg-5.jpg" alt="image1" class="object-cover w-full h-full absolute top-0 left-0">
       <div class="container mx-auto">
            <div class="relative z-10 md:px-6 px-4 flex flex-wrap items-center justify-around">
            <div class="slide-content lg:py-0 py-28 sm:text-left text-center 2xl:w-1/3 xl:w-2/3 sm:w-1/2 w-ful sm:mt-0 mt-32">
                <div class="">
                    <div class="mb-6">
                        <p class="top-content uppercase text-green-500 font-bold text-lg">Jacob Hill Jr.</p>
                    </div>
                    <h1 class="uppercase md:leading-tight title md:text-7xl text-4xl font-black text-white mt-1.5">
                        LIFE <span class="prm-color rounded px-2 pb-3">COACH</span>
                    </h1>
                    <p class="md:text-2xl text-md font-medium mt-8 text-white">Delivering deep insight,
                        game-changing ideas revolutionary strategies to drive scalable growth revolution.</p>
                    <div class="pt-10 flex flex-wrap sm:justify-start justify-center">
                      <custom-button buttonClass=" bg-green-500 font-bold text-white" isLink=true content="GET IN TOUCH"></custom-button>
                        <custom-button buttonClass=" underline font-bold text-white" isLink=true content="HOW IT WORKS"></custom-button>
                    </div>
                </div>
            </div>
            <div class="md:w-1/3 sm:w-1/2 w-full sm:mt-32 mt-10">
                <img src="../../../assets/images/men.png" alt="" class="sm:mx-0 mx-auto">
            </div>
        </div>
       </div>

    </div>
</template>
<script>

import CustomButton from '@/components/button/CustomButton.vue'

export default {
  components: { CustomButton },
    name:"TopBanner"
}
</script>