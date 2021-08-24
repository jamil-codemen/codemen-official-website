<template>
    <div class="group">
        <a href="#" class="flex items-center flex-col hover:bg-green-500 bg-gray-50 border-green-500 border p-10 rounded cursor-pointer">
            <img :src="require(`@/assets/images/${imgSource}`)" class="filter" alt="">
            <span class="font-semibold text-3xl group-hover:text-white">{{ languageName }}</span>
        </a>            
    </div>
</template>
<script lang="ts">

export default {
    name:"SkillCard",
    props:{
        imgSource:String,
        languageName:String
    }
}
</script>