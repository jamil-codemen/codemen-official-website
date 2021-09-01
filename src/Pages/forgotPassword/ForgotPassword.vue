<template>
  <div class="loginBg">
    <div class="container max-w-screen-xl mx-auto md:px-6 px-4">
      <div class="row min-h-screen items-center justify-center">
        <!---------------------------image section --------------------------------------->
        <div class="w-0 md:w-1/2 px-4"></div>
        <!---------------------------written section --------------------------------------->
        <div class="w-full md:w-1/2 px-4">
          <div class="bg-white px-8 md:px-12 py-12 rounded">
            <div>
              <h3 class="font-bold text-3xl text-gray-800 md:leading-10">
                Forgot Password
              </h3>
              <p class="text-gray-700 pt-3">
                Enter your email and we will send you a link to reset your
                password.
              </p>
            </div>
            <!----------------------------------- form section ------------------------------------------------->
            <form action="" class="py-6">
              <label for="email" class="text-gray-800 font-semibold"
                >Email</label
              >
              <custom-input-field
                inputClass="bg-green-50  border border-green-50 focus:border-green-200 mt-3 mb-6 rounded"
                inputName="email"
                inputPlaceholder="mail@gmail.com"
                inputType="email"
              ></custom-input-field>

              <div class="flex justify-center">
                <button
                  type="submit"
                  class="
                    py-4
                    px-8
                    rounded
                    text-center
                    bg-green-500
                    text-white
                    hover:bg-gray-900
                    font-bold
                    mt-3
                    w-full
                  "
                >
                  <span class="md:text-lg text-md uppercase leading-8"
                    >Submit</span
                  >
                </button>
              </div>

              <div
                class="
                  text-sm text-green-500
                  hover:text-gray-900
                  text-center
                  mt-6
                "
              >
                <router-link to="/login" class="flex items-center justify-center">
                  <span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                      /></svg
                  ></span>
                  <span class="block">Back to Login</span></router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import customInputField from "@/components/customInputField/customInputField.vue";
import CustomButton from "@/components/button/CustomButton.vue";
export default {
  components: { customInputField, CustomButton },
  name: "ForgotPassword",
};
</script>