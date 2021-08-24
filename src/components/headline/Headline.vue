<template>
        <div class="relative py-32">
        <div class="bg-center bg-gray-800"></div>
        <img :src="require(`@/assets/images/${imgSource}`)"  alt="image1"
            class="object-cover w-full h-full absolute top-0 left-0">
        <div class="relative z-10 mx-auto flex justify-center text-center">
                <div class="sm:mt-0 mt-32">
                    <nav class="">
                        <ol class="breadcrumb flex flex-wrap justify-center font-medium text-xl">
                            <li class="text-white"><router-link to="/">Home</router-link></li>
                            <span class="px-2 text-white">/</span>
                             <li class="text-green-500  active:text-green-500 " aria-current="page"><router-link :to="currentLink">{{ currentPageName }}</router-link></li>
                        </ol>
                    </nav>
                    <h1 class="md:leading-tight title md:text-7xl text-4xl font-black text-white mt-1.5">
                       {{ currentPageName }}
                    </h1>
                </div>
            </div>
        </div>
</template>
<script lang="ts">

export default{
    name:"Headline",
    props:{
        imgSource:String,
        currentLink:String,
        currentPageName:String
    }
    
}
// import "../../assets/images/"
</script>