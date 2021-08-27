<template>
        <div class="group">
            <div class="bg-green-50 w-full h-full overflow-hidden shadow-lg cursor-pointer">
                <img class="bg-bottom transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mx-auto"
                    :src="require(`@/assets/images/team/${imgSource}`)" alt="">
            </div>
            <div class="text-center pt-6">
                <p class="font-semibold text-2xl">{{ employeeName }}</p>
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