<template>
  <!-- Topbar -->
  <div>
    <div class="bg-cst-color p-4">
      <div
        class="container flex justify-center flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row"
      >
        <div class="text-center">
          <i class="text-gray-300 fas fa-clock"></i>
          <span class="text font-normal text-base text-gray-400 px-2">
            Open Hours: Mon - Fri - 10:00 AM - 07:00 PM
          </span>
        </div>
        <div class="flex flex-wrap justify-center">
          <div class="flex flex-wrap justify-center">
            <div class="lg:px-8 md:px-6 sm:px-3 px-2">
              <i class="text-gray-300 fas fa-envelope"></i>
              <span class="text font-normal text-base text-gray-400 px-2">
                codemenorg@gmail.com
              </span>
            </div>
          </div>
          <div class="flex space-x-3">
            <a href="javascript:;" class="">
              <img
                class="h-4 w-4 "
                src="../../assets/icons/facebook.svg"
                alt=""
              />
            </a>
            <a href="javascript:;" class="">
              <img
                class="h-4 w-4 "
                src="../../assets/icons/twitter.svg"
                alt=""
              />
            </a>
            <a href="javascript:;" class="">
              <img
                class="h-4 w-4 "
                src="../../assets/icons/linkedin.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Topbar End -->
    <nav class="bg-gray-900 ">
      <div class="container mx-auto hidden md:block">
        <div class="flex w-full flex-wrap">
          <!-- Wide Nav Logo -->
          <div class="text-xl text-white ml-4">
            <img src="../../assets/images/codemen-logo2.png" alt="" />
          </div>
          <!-- Wide Screen Nav -->
          <div class="ml-auto ">
            <ul class="flex space-x-14">
              <li
                
                class="uppercase font-bold text-base text-white "
              >
                <router-link to="/"
                active-class="text-green-500" 
                  >Home</router-link
                >
              </li>
              <li
                
                class="uppercase font-bold text-base text-white hover:text-green-500 active:text-green-500"
              >
                <router-link to="/about" active-class="text-green-500"
                  >About Us</router-link
                >
              </li>
              <li
                class="uppercase font-bold text-base text-white hover:text-green-500 active:text-green-500"
              >
                <router-link to="/ourteam" active-class="text-green-500">Our Team</router-link>
              </li>
              <li
                class="uppercase font-bold text-base text-white hover:text-green-500 active:text-green-500"
              >
                <router-link to="/contact-us" active-class="text-green-500">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex">
        <!-- Mobile Nav Logo -->
        <div class="text-xl text-white block md:hidden mx-4">
          <p>Codemen</p>
        </div>
        <div @click="toggle" class="ml-auto block md:hidden mx-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      <!-- Mobile Nav -->
      <div :class="open ? 'hidden' : 'block'" class=" mx-4 block md:hidden">
        <div class="">
          <div class="">
            <ul class="">
              <li
                class="uppercase font-bold text-lg text-white hover:text-green-600 active:text-green-500"
              >
                <router-link to="/">Homee</router-link>
              </li>
              <li
                class="uppercase font-bold text-lg text-white hover:text-green-600"
              >
                <router-link to="/about">About Us</router-link>
              </li>
              <li
                class="uppercase font-bold text-lg text-white hover:text-green-600"
              >
                <router-link to="/ourteam">Our Team</router-link>
              </li>
              <li
                class="uppercase font-bold text-lg text-white hover:text-green-600"
              >
                <router-link to="/contact-us">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
.bg-cst-color {
  background-color: #21333e;
}
</style>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      open: true,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>
