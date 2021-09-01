<template>
  <!-- new section -->
  <section class="md:px-24 px-0 pt-24 pb-12">
    <div class="container max-w-screen-xl mx-auto md:px-6 px-4">
      <div class="row">
        <!-------------------------------Send a message section---------------------------------------------------->
        <div class="lg:w-2/3 md:1/2 w-full pl-4 pr-10">
          <div class="sm:text-left text-center mb-6">
            <p class="uppercase text-green-500 font-bold text-lg">
              Send a message
            </p>
          </div>
          <custom-header headerClass="font-black text-4xl text-gray-800 md:text-left text-center" firstSpan="Get in " SecondSpan="Touch" blockSecond></custom-header>
          <p class="mt-10 text-gray-700 text-xl sm:text-left text-center">
            We will respond to your message as soon as possible.
          </p>
          <div class="w-full mt-12">
             <!-------------------------------form section---------------------------------------------------->
            <form action="php/form.php" @submit.prevent="submitForm()">
              <div class="row">
                <!------------------------------------ name input ------------------------------------------------->
                <div class="sm:w-1/2 w-full px-4 py-3">
                  <custom-input-field
                    :inputClass=" !isNameValid ?' bg-red-100  border border-red-200 ':'bg-green-50  border border-green-50 focus:border-green-200'"
                    inputName="name"
                    inputPlaceholder="Name"
                    inputType="text"
                    v-model="userName"
                    @blur="nameValidityCheck"
                    @focus="isNameValid=true"
                  ></custom-input-field>
                  <small class="text-xs text-red-600 pt-1" :class=" !isNameValid ? 'block':'hidden'">Enter name of more than 3 Characters</small>
                </div>
                <!------------------------------------ email input ------------------------------------------------->
                <div class="sm:w-1/2 w-full px-4 py-3">
                  <custom-input-field
                      :inputClass=" !isEmailValid ?' bg-red-100  border border-red-200 ':'bg-green-50  border border-green-50 focus:border-green-200'"
                    inputName="email"
                    inputPlaceholder="Email"
                    inputType="email"
                    v-model="userEmail"
                    @blur="emailValidityCheck"
                    @focus="isEmailValid=true"
                  ></custom-input-field>
                    <small class="text-xs text-red-600 pt-1" :class=" !isEmailValid ? 'block':'hidden'">Enter valid Email address</small>
                </div>
                <!------------------------------------ phone input ------------------------------------------------->
                <div class="sm:w-1/2 w-full px-4 py-3">
                  <custom-input-field
                      :inputClass=" !isPhoneValid ?' bg-red-100  border border-red-200 ':'bg-green-50  border border-green-50 focus:border-green-200'"
                    inputName="phone"
                    inputPlaceholder="Phone"
                    inputType="tel"
                    v-model="userPhone"
                    @blur="phoneValidityCheck"
                    @focus="isPhoneValid=true"
                  ></custom-input-field>
                    <small class="text-xs text-red-600 pt-1" :class=" !isPhoneValid ? 'block':'hidden'">Enter a valid phone number</small>
                </div>
                <!------------------------------------ subject input ------------------------------------------------->
                <div class="sm:w-1/2 w-full px-4 py-3">
                  <custom-input-field
                  :inputClass=" !isSubjectValid ?' bg-red-100  border border-red-200 ':'bg-green-50  border border-green-50 focus:border-green-200'"
                    inputName="subject"
                    inputPlaceholder="Subject"
                    inputType="text"
                    v-model="messageSubject"
                    @blur="subjectValidityCheck"
                    @focus="isSubjectValid=true"
                  ></custom-input-field>
                    <small class="text-xs text-red-600 pt-1" :class=" !isSubjectValid ? 'block':'hidden'">Enter a subject of your message</small>
                </div>
              </div>
              <!------------------------------------ message input ------------------------------------------------->
              <div class="w-full py-3">
                <custom-input-field
                  isTextArea
                   :inputClass=" !isMessageValid ?' bg-red-100  border border-red-200 ':'bg-green-50  border border-green-50 focus:border-green-200'"
                  inputName="message"
                  inputPlaceholder="Message"
                  inputType="text"
                  textAreaRows="6"
                  v-model="message"
                  @blur="messageValidityCheck"
                    @focus="isMessageValid=true"
                ></custom-input-field>
                  <small class="text-xs text-red-600 pt-1" :class=" !isMessageValid ? 'block':'hidden'">Please write a message to sent</small>
              </div>
              <!------------------------------------ submit button  ------------------------------------------------->
              <custom-button
                type='submit'
                buttonClass="bg-green-500 text-white hover:bg-gray-900 my-12 font-bold"
                content="Submit"
              ></custom-button>
            </form>
          </div>
        </div>
        <!-------------------------------  example section   ---------------------------------------------------->
        <div class="lg:w-1/3 w-full px-4">
          <div class="lg:mt-28 mt-6">
            <div>
              <h4 class="text-3xl font-semibold sm:text-left text-center">
                Example Inc.
              </h4>
              <p
                class="
                  mt-6
                  text-gray-700 text-base
                  font-normal
                  sm:text-left
                  text-center
                "
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p
                class="
                  mt-4
                  text-gray-700 text-base
                  font-normal
                  sm:text-left
                  text-center
                "
              >
                Curabitur convallis, diam a egestas iaculis, neque lorem
                interdum felis, in viverra lacus tortor in leo.
              </p>
              <ul class="mt-12 w-full flex flex-wrap space-y-6 items-center">
                <div class="w-full">
                  <li class="flex items-center mt-6">
                    <span
                      class="
                        bg-green-100
                        h-12
                        w-12
                        text-center
                        rounded-full
                        absolute
                      "
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="
                          h-8
                          w-8
                          font-bold
                          text-2xl
                          absolute
                          text-green-700
                          top-2
                          left-2
                        "
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                        />
                        <path
                          d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                        /></svg
                    ></span>
                    <p class="ml-16 font-medium text-green-700 -mt-2.5 text-xl">
                      hello@example.com
                    </p>
                  </li>
                </div>
                <div class="w-full">
                  <li class="flex items-center mt-6">
                    <span
                      class="
                        bg-green-100
                        h-12
                        w-12
                        text-center
                        rounded-full
                        absolute
                      "
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="
                          h-8
                          w-8
                          font-bold
                          text-2xl
                          absolute
                          text-green-700
                          top-2
                          left-2
                        "
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                        />
                        <path
                          d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                        /></svg
                    ></span>
                    <p class="ml-16 font-medium text-green-700 -mt-2.5 text-xl">
                      hello@example.com
                    </p>
                  </li>
                </div>
                <div class="w-full">
                  <li class="flex items-center mt-6">
                    <span
                      class="
                        bg-green-100
                        h-12
                        w-12
                        text-center
                        rounded-full
                        absolute
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="
                          h-8
                          w-8
                          font-bold
                          text-2xl
                          absolute
                          text-green-700
                          top-2
                          left-2
                        "
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <p class="ml-16 font-medium text-green-700 -mt-2.5 text-xl">
                      4th Floor, 17 R Amin Tower,KDA Avenue Khulna-9100,
                      Bangladesh.
                    </p>
                  </li>
                </div>
                <div class="w-full">
                  <custom-button
                    buttonClass="mt-12 bg-green-100 text-green-700 hover:bg-green-200 font-bold"
                    isLink
                    linkAddress="https://www.google.com/maps/place/Codemen/@22.818397,89.5535612,20.75z/data=!4m19!1m13!4m12!1m4!2m2!1d89.5292919!2d22.8630504!4e1!1m6!1m2!1s0x39ff8fff093a85eb:0xf4d367ff053cf71c!2scodemen!2m2!1d89.5535624!2d22.8184363!3m4!1s0x39ff8fff093a85eb:0xf4d367ff053cf71c!8m2!3d22.8184363!4d89.5535624"
                    content="VIEW MAP"
                  ></custom-button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CustomButton from "@/components/button/CustomButton.vue";
import CustomInputField from "@/components/customInputField/customInputField.vue";
import CustomHeader from '@/components/customHeader/CustomHeader.vue';

export default {
  name: "ContactForm",
  components: {
    CustomButton,
    CustomInputField,
    CustomHeader,
  },
  data(){
    return{
      userName:'',
      userEmail:'',
      userPhone:null,
      messageSubject:'',
      message:'',
      isNameValid:true,
      isEmailValid:true,
      isPhoneValid:true,
      isSubjectValid:true,
      isMessageValid:true
    }
  },
  methods:{ 

    //checking if name is longer than 3 characters
    nameValidityCheck(){
      if(this.userName.trim().length<3){
        this.isNameValid=false
        
      }else{
        this.isNameValid=true
      }
    },

    //checking if the email is valid
     emailValidityCheck(){
      if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userEmail)){
        this.isEmailValid=true
        
      }else{
        this.isEmailValid=false
      }
    },

    //checking if the phone number is valid
        phoneValidityCheck(){
      if(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(this.userPhone) && this.userPhone.trim().length>=8){
        this.isPhoneValid=true
        
      }else{
        this.isPhoneValid=false
      }
    },
    //checking is thier is any subject
    subjectValidityCheck(){
      if(this.messageSubject.trim()===''){
        this.isSubjectValid=false
        
      }else{
        this.isSubjectValid=true
      }
    },

    //checking if there is any message
    messageValidityCheck(){
      if(this.message.trim()==='' || /<.+?>/g.test(this.message)){
        this.isMessageValid=false
        
      }else{
        this.isMessageValid=true
      }
    },
    
    submitForm(){
      console.log(this.userName);
      console.log(this.userEmail);
      console.log(this.userPhone);
      console.log(this.messageSubject);
      console.log(this.message);
    }
  }
};
</script>
<style scoped>
.prm-color {
  background-color: #113335;
}
</style>
