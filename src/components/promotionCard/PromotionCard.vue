<template>
    <div class="container max-w-screen-xl mx-auto md:px-6 bg-green-200 py-14 my-4 rounded">
            <div class="text-center">
                <h2 class="py-6 font-bold text-4xl">Codemen unlocks your financial potential</h2>
                <p class="py-2 text-gray-700 text-xl">Through our platform, you can access a network of APIs, banks and other financial<br> institutions easily. Ready to start your journey with us?</p>
                <div class="mt-12 flex justify-center sm:mx-0 mx-4">
                        <custom-button buttonClass="bg-green-500 hover:bg-gray-900 font-bold text-white" isLink content="Read More"></custom-button>
                </div>
            </div>
        </div>
</template>
<script lang="ts">
import CustomButton from '../button/CustomButton.vue'
export default {
  components: { CustomButton },
    name:"PromotionCard"
}

</script>