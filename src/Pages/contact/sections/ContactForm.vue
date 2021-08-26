<template>
  <!-- new section -->
  <section>
    <div class="container mx-auto px-4">
      <div class="row">
        <div class="w-full px-4">
          <p
            class="uppercase text-green-500 font-bold text-lg my-10 text-center"
          >
            Send a message
          </p>
          <h1
            class="md:leading-tight title md:text-5xl text-4xl font-black text-gray-700 mt-1.5"
          >
            Get in
            <span class="prm-color rounded  text-white px-2 py-2">Touch</span>
          </h1>
        </div>
        <div class="w-full md:w-8/12 px-4">
          <p class="my-4 text-gray-700 text-xl">
            We will respond to your message as soon as possible.
          </p>
          <form action="php/form.php" id="contact_form" class="ct_form">
            <div class="grid sm:grid-cols-2 grid-cols-1 gap-6">
              <div class="">
                <custom-input
                  inputClass="bg-green-50  border border-green-50 focus:border-green-200 "
                  inputName="name"
                  inputPlaceholder="Name"
                  inputType="text"
                ></custom-input>
                <!-- <input
                  type="text"
                  name="name"
                  class="rounded bg-green-50 px-4 py-4 w-full border border-green-50 focus:border-green-200 focus:outline-none"
                  placeholder="Name"
                /> -->
              </div>
              <div class="">
                <custom-input
                  inputClass="bg-green-50  border border-green-50 focus:border-green-200 "
                  inputName="name"
                  inputPlaceholder="Email"
                  inputType="email"
                ></custom-input>
                <!-- <input
                  type="email"
                  name="email"
                  class="rounded bg-green-50 px-4 py-4 w-full border border-green-50 focus:border-green-200 focus:outline-none"
                  placeholder="Email"
                /> -->
              </div>
              <div>
                <custom-input
                  inputClass="bg-green-50  border border-green-50 focus:border-green-200 "
                  inputName="phone"
                  inputPlaceholder="Phone"
                  inputType="text"
                ></custom-input>
                <!-- <div class="">
                <input
                  type="text"
                  name="phone"
                  class="rounded bg-green-50 px-4 py-4 w-full border border-green-50 focus:border-green-200 focus:outline-none"
                  placeholder="Phone"
                /> -->
              </div>
              <div class="">
                <custom-input
                  inputClass="bg-green-50  border border-green-50 focus:border-green-200 "
                  inputName="subject"
                  inputPlaceholder="Subject"
                  inputType="text"
                ></custom-input>
                <!-- <input
                  type="text"
                  name="subject"
                  class="rounded bg-green-50 px-4 py-4 w-full border border-green-50 focus:border-green-200 focus:outline-none"
                  placeholder="Subject"
                /> -->
              </div>
            </div>
            <div class="col-12 mt-6">
              <custom-input
                isTextArea=true
                inputClass="bg-green-50  border border-green-50 focus:border-green-200 "
                inputName="message"
                inputPlaceholder="Message"
                inputType="text"
                textAreaRows="6"
              ></custom-input>
            </div>
            <custom-button
              buttonClass="bg-green-500 text-white hover:bg-gray-900 my-12"
              :isLink="false"
              content="Submit"
            ></custom-button>
          </form>
        </div>
        <div class="w-full md:w-4/12 px-4">
          <div class="">
            <div class="">
              <h4 class="text-3xl font-semibold">Example Inc.</h4>
              <p class="mt-6 text-gray-700 text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p class="mt-4 text-gray-700 text-base font-normal">
                Curabitur convallis, diam a egestas iaculis, neque lorem
                interdum felis, in viverra lacus tortor in leo.
              </p>
              <ul class="mt-12">
                <li class="flex items-center mt-6">
                  <a
                    href="#"
                    class="bg-green-100 h-12 w-12 text-center rounded-full"
                  >
                    <i
                      class="fas fa-envelope font-bold text-2xl  mt-3 text-green-700"
                    ></i>
                  </a>
                  <p class="ml-4 font-medium text-green-700 -mt-2.5 text-xl">
                    hello@example.com
                  </p>
                </li>
                <li class="flex items-center mt-6">
                  <a
                    href="#"
                    class="bg-green-100 h-12 w-12 text-center rounded-full"
                  >
                    <i
                      class="fas fa-envelope font-bold text-2xl  mt-3 text-green-700"
                    ></i>
                  </a>
                  <p class="ml-4 font-medium text-green-700 -mt-2.5 text-xl">
                    hello@example.com
                  </p>
                </li>
                <li class="flex items-center mt-6">
                  <div>
                    <a
                      href="#"
                      class="bg-green-100 h-12 w-12 text-center rounded-full inline-block"
                    >
                      <i
                        class="fas fa-map-marker-alt font-bold text-2xl mt-3 text-green-700"
                      ></i>
                    </a>
                  </div>
                  <p class="ml-4 font-medium text-green-700 -mt-2.5 text-xl">
                    4th Floor, 17 R Amin Tower, KDA Avenue Khulna-9100,
                    Bangladesh.
                  </p>
                </li>
                <li
                  class=" mt-10 bg-green-100 text-center w-full hover:bg-green-200"
                >
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/Codemen/@22.818397,89.5535612,20.75z/data=!4m19!1m13!4m12!1m4!2m2!1d89.5292919!2d22.8630504!4e1!1m6!1m2!1s0x39ff8fff093a85eb:0xf4d367ff053cf71c!2scodemen!2m2!1d89.5535624!2d22.8184363!3m4!1s0x39ff8fff093a85eb:0xf4d367ff053cf71c!8m2!3d22.8184363!4d89.5535624"
                    class="text-green-700 font-semibold block  p-4"
                    >VIEW MAP</a
                  >
                </li>
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
import CustomInput from "@/components/customInputField/customInputField.vue";
export default {
  name: "ContactForm",
  components: {
    CustomButton,
    CustomInput,
  },
};
</script>
<style scoped>
.prm-color {
  background-color: #113335;
}
</style>
