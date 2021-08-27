<template>
        <section class="bg-green-100 py-24">
        <div class="container max-w-screen-xl mx-auto">
            <div class="flex flex-wrap w-full justify-center md:justify-around">
                <div class="lg:w-1/2 w-full align-self-top sm:order-1 order-2 sm:text-left text-center px-4 mx-auto">
                        <div class="w-full">
                                <p class="uppercase text-green-500 font-bold text-lg py-4">codemen.org</p>
                            <h2 class="uppercase md:leading-tight title text-4xl font-black  mt-1.5"><span class="prm-color rounded pb-3 pt-2 px-4"><span class="text-white" >Who</span></span> We Are</h2>
                        </div>
                    <div class="pt-8">
                        <div class="text-gray-700">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia. <b>Mauris lacus tellus, ultrices eu volutpat sit amet, finibus a ipsum.</b> Nullam sit amet pretium felis.</p>
                            <p class="pt-4">Curabitur convallis, diam a egestas iaculis, neque lorem interdum felis, in viverra lacus tortor in leo.</p>
                            <p class="pt-">Donec tristique diam id mi venenatis facilisis eget sed mi. Phasellus malesuada nulla diam, a dignissim quam congue et.</p>
                            <p><b>Cras sem ante, accumsan quis sem sed, rutrum varius nunc.</b></p>
                        </div>
                    </div>
                    <div class="pt-8 flex">
                        <custom-button buttonClass="bg-green-500 hover:bg-gray-900 font-bold text-white" isLink=true content="Read More"></custom-button>
                    </div>  
                </div>
                <div class="lg:w-1/2 w-full sm:order-2 order-1 sm:text-left text-center px-4 mx-auto">
                    <div class="flex justify-center">
                        <img src="../../../assets/images/WebDesignDevelopmentVector.png" alt="" class="">
                    </div>
                </div>
            </div>
            </div>
    </section>
</template>
<script lang="ts">
import CustomButton from '@/components/button/CustomButton.vue'


export default {
  components: { CustomButton },
    name:"AboutUsSection"
}
</script>