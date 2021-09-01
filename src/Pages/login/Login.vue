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
            <form action="" class="py-6" @submit.prevent="submitForm()">
                <!------------------------------------ email input ------------------------------------------------->
              <div class="mt-2 mb-3">
                 <label for="email" class="text-gray-800 font-semibold">Email</label>
                <custom-input-field
                  :inputClass=" !isEmailValid ?' bg-red-100  border border-red-200 my-2 rounded':'bg-green-50  border border-green-50 focus:border-green-200 my-2 rounded'"
                inputName="email"
                inputPlaceholder="mail@gmail.com"
                inputType="email"
                v-model="email"
                @blur="emailCheck"
                @focus="isEmailValid=true"
              ></custom-input-field>
              <small class="text-xs text-red-600 pt-1"  :class=" !isEmailValid ? 'block':'hidden'">Please enter a valid email</small>
              </div>
                <!------------------------------------ password input ------------------------------------------------->
             <div class="mt-2 mb-3">
                <label for="password" class="text-gray-800 font-semibold"
                >Password</label
              >
              <custom-input-field
                 :inputClass=" !isPasswordValid ?' bg-red-100  border border-red-200 my-2 rounded':'bg-green-50  border border-green-50 focus:border-green-200 my-2 rounded'"
                inputName="password"
                inputPlaceholder="Enter your password"
                inputType="password"
                v-model="password"
                @blur="passwordCheck"
                @focus="isPasswordValid=true"
              ></custom-input-field>
               <small class="text-xs text-red-600 pt-1"  :class=" !isPasswordValid ? 'block':'hidden'">Password must contain minimum eight characters, at least one letter, one number and one special character</small>
             </div>
               <!------------------------------------ checkbox section ------------------------------------------------->
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
                <!------------------------------------ submit section  ------------------------------------------------->
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
  data(){
    return{
        email:'',
        password:null,
        isEmailValid :true,
        isPasswordValid:true,
    }
  },
  methods:{

    //checking if email is valid 
     emailCheck(){
      if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)){
        this.isEmailValid=true
        
      }else{
        this.isEmailValid=false
      }
    },

    //checking if password is valid 

    passwordCheck(){
      if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(this.password)){
        this.isPasswordValid=true
        
      }else{
        this.isPasswordValid=false
      }
    },
    
    //submitting login form

    submitForm(){
      if (this.isEmailValid&& this.isPasswordValid) {
      console.log(this.email)
      console.log(this.password)
    }
    },
    
  }
};
</script>