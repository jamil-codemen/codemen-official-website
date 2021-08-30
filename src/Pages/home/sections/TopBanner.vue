<template>
  <div class="relative">
    <img
      src="../../../assets/images/bg-5.jpg"
      alt="image1"
      class="object-cover w-full h-full absolute top-0 left-0"
    />
    <!-------------------------------------------------------------->
    <section class="md:px-24 px-0 min-h-screen lg:pt-4">
      <div class="container max-w-screen-xl mx-auto md:px-6 px-4">
        <div class="row relative z-10 items-center justify-around">
          <!-------------------------written section ------------------------------------->
          <div
            class="
              w-full
              px-4
              mx-auto
              xl:w-5/12
              lg:w-1/2
              xl:mt-0
              mt-32
              lg:text-left
              text-center
            "
          >
            <div>
              <div class="mb-6">
                <p
                  class="top-content uppercase text-green-500 font-bold text-lg"
                >
                  Jacob Hill Jr.
                </p>
              </div>
              <custom-header headerClass="text-4xl md:text-7xl text-white mt-1.5 font-black" firstSpan="LIFE " SecondSpan="COACH" blockSecond></custom-header>
              <p class="md:text-2xl text-md font-medium mt-8 text-white">
                Delivering deep insight, game-changing ideas revolutionary
                strategies to drive scalable growth revolution.
              </p>
              <div class="pt-10 flex flex-wrap lg:justify-start justify-center">
                <custom-button
                  buttonClass="bg-green-500 font-bold text-white"
                  isLink
                  content="GET IN TOUCH"
                ></custom-button>
                <custom-button
                  buttonClass=" underline font-bold text-white"
                  isLink
                  content="HOW IT WORKS"
                ></custom-button>
              </div>
            </div>
          </div>
          <!-------------------------image section ------------------------------------->
          <div class="xl:w-7/12 lg:w-1/2 px-4 mx-auto w-full sm:mt-32 mt-10">
            <img
              src="../../../assets/images/banner.png"
              alt=""
              class="sm:mx-0 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------>
  </div>
</template>
<script>
import CustomButton from "@/components/button/CustomButton.vue";
import CustomHeader from '@/components/customHeader/CustomHeader.vue';

export default {
  components: { CustomButton, CustomHeader },
  name: "TopBanner",
};
</script>