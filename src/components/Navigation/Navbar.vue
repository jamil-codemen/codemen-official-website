<template>
  <div>
    <nav class="bg-gray-900">
      <div class="container mx-auto hidden md:block">
        <div class="flex w-full flex-wrap">
          <div class="text-xl text-white">
              <p>Codemen</p>
              </div>
              
          <div class="ml-auto">
            <ul class="flex space-x-10">
              <li class="uppercase font-bold text-xl text-green-600"><router-link to="default.asp">Home</router-link></li>
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
              <li class="uppercase font-bold text-xl text-green-600"><router-link to="default.asp">Home</router-link></li>
              <li class="uppercase font-bold text-xl text-white hover:text-green-600"><router-link to="">News</router-link></li>
              <li class="uppercase font-bold text-xl text-white hover:text-green-600"><router-link to="">Contact</router-link></li>
              <li class="uppercase font-bold text-xl text-white hover:text-green-600"><router-link to="">About</router-link></li>
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
