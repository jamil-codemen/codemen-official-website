<template>
  <div>
    <!-- Topbar Start-->
    <div class="bg-cst-color p-4">
      <div class="container max-w-screen-xl mx-auto">
        <div class="row">
          <div class="md:w-1/2 px-4 w-full">
            <div class="flex items-center md:justify-start justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="text font-normal text-base text-gray-400 px-2">
                Open Hours: Mon - Fri - 10:00 AM - 07:00 PM
              </span>
            </div>
          </div>
          <div class="md:w-1/2 px-4 w-full">
            <div
              class="flex flex-wrap md:justify-end justify-center items-center space-x-2"
            >
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span class="text font-normal text-base text-gray-400 px-2">
                  codemenorg@gmail.com
                </span>
              </div>
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
    </div>
    <!-- Topbar End -->
    <nav class="relative z-20">
      <div class="top-0 left-0 absolute w-full hidden md:block px-4">
        <div class="container max-w-screen-xl mx-auto">
          <div class="row items-center py-8">
            <!-- Wide Nav Logo -->
            <div class="w-1/3 px-4">
              <img src="../../assets/images/codemen-logo2.png" alt="" />
            </div>
            <!-- Wide Screen Nav -->
            <div class="w-2/3 px-4">
              <ul class="flex space-x-14 justify-end uppercase font-bold text-base text-white">
                <li class="hover:text-green-500">
                  <router-link to="/" active-class="text-green-500"
                    >Home</router-link
                  >
                </li>
                <li
                  class="hover:text-green-500"
                >
                  <router-link to="/about" active-class="text-green-500"
                    >About Us</router-link
                  >
                </li>
                <li
                  class="hover:text-green-500"
                >
                  <router-link to="/ourteam" active-class="text-green-500"
                    >Our Team</router-link
                  >
                </li>
                <li
                  class="hover:text-green-500"
                >
                  <router-link to="/contact-us" active-class="text-green-500"
                    >Contact</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute top-0 left-0 w-full block md:hidden">
        <!-- Mobile Nav Logo -->
        <div class="flex items-center justify-between mx-4 py-4">
          <img src="../../assets/images/codemen-logo2.png" alt="" />
          <div @click="toggle" class="ml-auto block md:hidden">
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
        <div :class="open ? 'hidden' : 'block'" class="bg-cst-color mx-4 block md:hidden">
          <div class="">
            <div class="">
              <ul class="space-y-1">
                <li
                  class="uppercase font-bold text-lg text-white hover:text-green-600 hover:bg-gray-900 active:text-green-500"
                >
                  <router-link to="/" class="inline-block ml-3 py-3">Home</router-link>
                </li>
                <li
                  class="uppercase font-bold text-lg text-white hover:text-green-600 hover:bg-gray-900 active:text-green-500"
                >
                  <router-link to="/about" class="inline-block ml-3 py-3">About Us</router-link>
                </li>
                <li
                  class="uppercase font-bold text-lg text-white hover:text-green-600 hover:bg-gray-900 active:text-green-500"
                >
                  <router-link to="/ourteam" class="inline-block ml-3 py-3">Our Team</router-link>
                </li>
                <li
                  class="uppercase font-bold text-lg text-white hover:text-green-600 hover:bg-gray-900 active:text-green-500"
                >
                  <router-link to="/contact-us" class="inline-block ml-3 py-3">Contact</router-link>
                </li>
              </ul>
            </div>
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
