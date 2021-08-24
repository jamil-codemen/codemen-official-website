<template>
        <div class="bg-cst-color p-4">
            <div class="container flex justify-center flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row">
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
                    <div class="">
                        <a href="javascript:;" class="m-2.5"> 
                            <i class="hover:text-green-500 text-gray-400 fab fa-facebook-f"></i>
                        </a>
                        <a href="javascript:;" class="m-2.5">
                            <i class="hover:text-green-500 text-gray-400 fab fa-twitter"></i>
                        </a>
                        <a href="javascript:;" class="m-2.5">
                            <i class="hover:text-green-500 text-gray-400 fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div> 
  <div class="bg-cst-color p-4">
            <div class="container flex justify-center flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row">
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
                    <div class="">
                        <a href="javascript:;" class="m-2.5"> 
                            <i class="hover:text-green-500 text-gray-400 fab fa-facebook-f"></i>
                        </a>
                        <a href="javascript:;" class="m-2.5">
                            <i class="hover:text-green-500 text-gray-400 fab fa-twitter"></i>
                        </a>
                        <a href="javascript:;" class="m-2.5">
                            <i class="hover:text-green-500 text-gray-400 fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div> 

  <div>
    <nav class="bg-gray-900">
      <div class="container mx-auto hidden md:block">
        <div class="flex w-full flex-wrap">
          <div class="text-xl text-white">
              <p>Codemen</p>
              </div>
              
          <div class="ml-auto">
            <ul class="flex space-x-10">

              <li class="uppercase font-bold text-xl text-green-600"><router-link href="default.asp">Home</router-link></li>
              <li class="uppercase font-bold text-xl text-white hover:text-green-600"><router-link to="">News</router-link></li>
              <li class="uppercase font-bold text-xl text-white hover:text-green-600"><router-link to="">Contact</router-link></li>
              <li class="uppercase font-bold text-xl text-white hover:text-green-600"><router-link to="">About</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    <div class="flex">
          <div class="text-xl text-white block md:hidden mx-4">
              <p>Codemen</p>
              </div>
      <div @click="toggle" class="ml-auto block md:hidden mx-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg></div>
    </div>
      <div :class="open ? 'hidden': 'block'"  class=" mx-4 block md:hidden">
        <div class="">   
          <div class="">
            <ul class="">
              <li class="uppercase font-bold text-xl text-green-600"><router-link to="">Home</router-link></li>
              <li class="uppercase font-bold text-xl text-white hover:text-green-600"><router-link to="">News</router-link></li>
              <li class="uppercase font-bold text-xl text-white hover:text-green-600"><router-link to="">Contact</router-link></li>
              <li class="uppercase font-bold text-xl text-white hover:text-green-600"><router-link to="">About</router-link></li>
            </ul>
          </div>
          
        </div>
      </div>

              <li class="uppercase font-bold text-xl text-green-600"><a href="default.asp">Home</a></li>
              <li class="uppercase font-bold text-xl text-white hover:text-green-600"><a href="news.asp">News</a></li>
              <li class="uppercase font-bold text-xl text-white hover:text-green-600"><a href="contact.asp">Contact</a></li>
              <li class="uppercase font-bold text-xl text-white hover:text-green-600"><a href="about.asp">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    <div class="flex">
          <div class="text-xl text-white block md:hidden mx-4">
              <p>Codemen</p>
              </div>
      <div @click="toggle" class="ml-auto block md:hidden mx-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg></div>
    </div>
      <div :class="open ? 'hidden': 'block'"  class=" mx-4 block md:hidden">
        <div class="">   
          <div class="">
            <ul class="">
              <li class="uppercase font-bold text-xl text-green-600"><a href="default.asp">Home</a></li>
              <li class="uppercase font-bold text-xl text-white hover:text-green-600"><a href="news.asp">News</a></li>
              <li class="uppercase font-bold text-xl text-white hover:text-green-600"><a href="contact.asp">Contact</a></li>
              <li class="uppercase font-bold text-xl text-white hover:text-green-600"><a href="about.asp">About</a></li>
            </ul>
          </div>
          
        </div>
      </div>

    </nav>
  </div>
</template>
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
