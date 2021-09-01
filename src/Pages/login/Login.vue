<template>
  <div class="loginBg">
    <div class="container max-w-screen-xl mx-auto md:px-6 px-4">
      <div class="row min-h-screen items-center justify-center">
        <!---------------------------image section --------------------------------------->
        <div class="w-0 md:w-1/2 px-4">
        </div>
        <!---------------------------written section --------------------------------------->
        <div class="w-full md:w-1/2 px-4">
          <div class="bg-white px-8 md:px-12 py-12 rounded">
            <div>
              <h3 class="font-bold text-3xl text-gray-800 md:leading-10">
                Sign In
              </h3>
              <p class="text-gray-700">Please sign in to your account.</p>
            </div>
            <!----------------------------------- form section ------------------------------------------------->
            <form action="" class="py-6">
              <label for="email" class="text-gray-800 font-semibold">Email</label>
              <custom-input-field
                inputClass="bg-green-50  border border-green-50 focus:border-green-200 mt-3 mb-6 rounded"
                inputName="email"
                inputPlaceholder="mail@gmail.com"
                inputType="email"
              ></custom-input-field>
              <label for="password" class="text-gray-800 font-semibold"
                >Password</label
              >
              <custom-input-field
                inputClass="bg-green-50  border border-green-50 focus:border-green-200 mt-3 mb-6 rounded"
                inputName="password"
                inputPlaceholder="Enter your password"
                inputType="password"
              ></custom-input-field>
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    class="h-4 w-4 block mr-3"
                  />
                  <label for="remember-me">Remember me</label>
                </div>
                <div class="text-sm text-green-500 hover:text-gray-900">
                  <router-link to="/forgotPassword">Forgot your password?</router-link>
                </div>
              </div>
              <div class="flex justify-center">
                <button
                type="submit"
                  class="py-4 px-8 rounded text-center bg-green-500 text-white hover:bg-gray-900 font-bold mt-12 w-full"
                >
                  <span class="md:text-lg text-md uppercase leading-8">Login</span>
                </button>
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
  name: "Login",
};
</script>