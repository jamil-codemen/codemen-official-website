<template>
  <!-- new section -->
  <section class="md:px-24 px-0 pt-24 pb-12">
    <div class="container max-w-screen-xl mx-auto md:px-6 px-4">
      <div class="row">
        <div class="lg:w-2/3 md:1/2 w-full pl-4 pr-10">
          <div class="sm:text-left text-center mb-6">
            <p class="uppercase text-green-500 font-bold text-lg">
              Send a message
            </p>
          </div>
          <h1
            class="
              md:leading-tight
              md:text-5xl
              text-4xl
              font-black
              text-gray-700
              mt-1.5
              sm:text-left
              text-center
            "
          >
            Get in
            <span class="prm-color rounded text-white px-2 pb-3">Touch</span>
          </h1>
          <p class="mt-10 text-gray-700 text-xl sm:text-left text-center">
            We will respond to your message as soon as possible.
          </p>
          <div class="w-full mt-12">
            <form action="php/form.php">
              <div class="row">
                <div class="sm:w-1/2 w-full px-4 py-3">
                  <!-- <input type="text" name="name" class="rounded bg-green-50 px-4 py-4 w-full border border-green-50 focus:border-green-200 focus:outline-none" placeholder="Name"> -->
                  <custom-input-field
                    inputClass="bg-green-50  border border-green-50 focus:border-green-200 "
                    inputName="name"
                    inputPlaceholder="Name"
                    inputType="text"
                  ></custom-input-field>
                </div>
                <div class="sm:w-1/2 w-full px-4 py-3">
                  <custom-input-field
                    inputClass="bg-green-50  border border-green-50 focus:border-green-200 "
                    inputName="name"
                    inputPlaceholder="Email"
                    inputType="email"
                  ></custom-input-field>
                </div>
                <div class="sm:w-1/2 w-full px-4 py-3">
                  <custom-input-field
                    inputClass="bg-green-50  border border-green-50 focus:border-green-200 "
                    inputName="phone"
                    inputPlaceholder="Phone"
                    inputType="text"
                  ></custom-input-field>
                </div>
                <div class="sm:w-1/2 w-full px-4 py-3">
                  <custom-input-field
                    inputClass="bg-green-50  border border-green-50 focus:border-green-200 "
                    inputName="subject"
                    inputPlaceholder="Subject"
                    inputType="text"
                  ></custom-input-field>
                </div>
              </div>
              <div class="w-full py-3">
                <custom-input-field
                  isTextArea
                  inputClass="bg-green-50  border border-green-50 focus:border-green-200 "
                  inputName="message"
                  inputPlaceholder="Message"
                  inputType="text"
                  textAreaRows="6"
                ></custom-input-field>
              </div>
              <custom-button
                buttonClass="bg-green-500 text-white hover:bg-gray-900 my-12 font-bold"
                content="Submit"
              ></custom-button>
            </form>
          </div>
        </div>
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

export default {
  name: "ContactForm",
  components: {
    CustomButton,
    CustomInputField,
  },
};
</script>
<style scoped>
.prm-color {
  background-color: #113335;
}
</style>
