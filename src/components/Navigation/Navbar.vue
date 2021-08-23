<template>
    <header class="relative">
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
        <!--=================================================
            Start main nav
        ==================================================-->    
        <div class="z-20 w-full text-gray-70 dark-mode:text-gray-200 dark-mode:bg-gray-800 absolute  md:px-4 px-0 ">
            <div x-data="{ open: false }" class="container flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row">
                <div class="py-8 flex flex-row items-center justify-between">
                <a href="#" class="">
                    <img src="" alt="" srcset="">
                </a>
                <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline text-white" @click="open = !open">
                    <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                    <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                    <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </button>
                </div>
                <nav class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
                    <router-link to="/" class="p-4 md:bg-transparent bg-cst-color  mt-0 text-green-500  text-base lg:px-4 lg:py-2 md:hover:bg-transparent hover:bg-gray-900 md:mt-2 font-semibold  lg:mt-0 hover:text-green-500 focus:text-green-500 focus:outline-none focus:shadow-outline uppercase " href="#">Home</router-link>
                    <router-link to="/" class="p-4 md:bg-transparent bg-cst-color  mt-0 text-white text-base  lg:px-4 lg:py-2 md:hover:bg-transparent hover:bg-gray-900 md:mt-2 font-semibold bg-transparent lg:mt-0 lg:ml-4 hover:text-green-500 focus:text-green-500 focus:outline-none focus:shadow-outline uppercase " href="#">About Us</router-link>
                    <router-link to="/ourteam" class="p-4 md:bg-transparent bg-cst-color  mt-0 text-white text-base  lg:px-4 lg:py-2 md:hover:bg-transparent hover:bg-gray-900 md:mt-2 font-semibold bg-transparent lg:mt-0 lg:ml-4 hover:text-green-500 focus:text-green-500 focus:outline-none focus:shadow-outline uppercase " href="#">Our Team</router-link>
                    <router-link to="/contact-us" class="p-4 md:bg-transparent bg-cst-color  mt-0 text-white text-base  lg:pl-4 lg:py-2 md:hover:bg-transparent hover:bg-gray-900 md:mt-2 font-semibold bg-transparent lg:mt-0 lg:ml-4 hover:text-green-500 focus:text-green-500 focus:outline-none focus:shadow-outline uppercase " href="#">Contact Us</router-link>
                    
                </nav>
            </div>
        </div>
    </header>   
</template>
<script>
export default {
    name:'Navbar'
}
</script>
