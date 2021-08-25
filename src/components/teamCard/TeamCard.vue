<template>
     <div class="relative">
        <div class="bg-green-50 w-full h-full overflow-hidden">
            <img class="bg-bottom transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" :src="require(`@/assets/images/${imgSource}`)" alt="">
        </div>
        <div class="text-center pt-6">
            <p class="font-semibold text-3xl">{{ employeeName }}</p>
            <p class="">{{ employeeRole }}</p>
        </div>            
    </div> 
</template>
<script lang="ts">
export default {
    name:"TeamCard",
    props:{
        imgSource:String,
        employeeName:String,
        employeeRole:String,
    }
}
</script>