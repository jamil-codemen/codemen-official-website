<template>
<div class="my-20">
            <div class="container max-w-screen-xl mx-auto md:px-6 px-4">
      <div class="w-full">
        <div class="text-center">
          <p class="uppercase text-green-500 font-bold text-lg pb-6">
            Introduction Video
          </p>
        </div>
        <custom-header headerClass="font-black text-4xl text-gray-800 text-center leading-8" firstSpan="Advisory " SecondSpan="Performance" blockSecond></custom-header>
      </div>
      <div class="">
        <div class="text-gray-700 py-8 text-center">
          <p class="text-xl">
            Financial executives need to review their strategies, operating
            models and capabilities so that their <br />areas can generate sound
            information for better decision making.
          </p>
        </div>
      </div>
      <div class="text-center mt-6">
        <div class="relative flex items-center justify-center">
          <!---------------------------------------------vedio-------------------------------------------------->
          <v-card class="">
            <video
                id="vedioElement"
              height="500px"
              controls
              src="../../assets/images/codemenv.mp4"
              @canplay="updatePaused"
              @playing="updatePaused"
              @pause="updatePaused"
            ></video>
            <br />
          </v-card>
<!--------------------play button ---------------------------->
          <div
            class="
              h-20
              w-20
              sm:h-40
              sm:w-40
              bg-green-500
              absolute
              rounded-full
              cursor-pointer
            "
            v-show="paused"
            @click="play"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="
                h-8
                w-8
                sm:h-16
                sm:w-16
                relative
                text-white
                top-6
                sm:top-12
                left-6
                sm:left-12
              "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <!------------------- pause button  ---------------------->
              <div
            class="
              h-20
              w-20
              sm:h-40
              sm:w-40
              bg-green-500
              absolute
              rounded-full
              cursor-pointer
              opacity-0
              hover:opacity-100
            "
            v-show="playing"
            @click="pause"
          >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8
                w-8
                sm:h-16
                sm:w-16
                relative
                text-white
                top-6
                sm:top-12
                left-6
                sm:left-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-16">
        <button
          class="
            py-4
            pl-8
            pr-2
            rounded
            flex
            justify-center
            sm:w-52
            w-full
            bg-green-500
            font-bold
            text-white
            items-center
          "
        >
          <a
            class="mr-6 md:text-lg text-md uppercase leading-8"
            href="javascript:;"
            >Join Now</a
          >
        </button>
      </div>
    </div>
</div>
</template>
<script>
import CustomHeader from '../customHeader/CustomHeader.vue';
export default {
  components: { CustomHeader },
    data(){
        return {
            vedioElement:null,
            paused:null
        }
    },
    methods:{
        updatePaused(event){
            this.vedioElement=event.target;
            this.paused=event.target.paused;
        },
        play(){
            this.vedioElement.play();
        },
        pause(){
            this.vedioElement.pause();
        },
    },
    computed:{
        playing(){
            return !this.paused;
        }
    }
}
</script>