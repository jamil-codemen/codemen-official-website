<template>
  <section id="our_team" class="md:px-24 px-0 py-24">
        <div class="container max-w-screen-xl mx-auto md:px-6 px-4">
            <div class="">
                <div class="flex flex-wrap justify-center">
                    <div class="md:w-1/4 sm:w-1/2 w-full px-4">
                        <MemberCard />
                    </div>
                    <div class="md:w-1/4 sm:w-1/2 w-full px-4">
                        <MemberCard/>
                    </div>
                    <div class="md:w-1/4 sm:w-1/2 w-full px-4">
                         <MemberCard/>
                    </div>
                </div>
                <div class="flex flex-wrap justify-center">
                    <div class="md:w-1/4 sm:w-1/2 w-full px-4">
                        <MemberCard/>
                    </div>
                    <div class="md:w-1/4 sm:w-1/2 w-full px-4">
                        <MemberCard/>
                    </div>
                    <div class="md:w-1/4 sm:w-1/2 w-full px-4">
                        <MemberCard/>
                    </div>
                    <div class="md:w-1/4 sm:w-1/2 w-full px-4">
                        <MemberCard/>
                    </div>
                    <div class="md:w-1/4 sm:w-1/2 w-full px-4">
                        <MemberCard/>
                    </div>
                    <div class="md:w-1/4 sm:w-1/2 w-full px-4">
                        <MemberCard/>
                    </div>
                    <div class="md:w-1/4 sm:w-1/2 w-full px-4">
                        <MemberCard/>
                    </div>
                    <div class="md:w-1/4 sm:w-1/2 w-full px-4">
                        <MemberCard/>
                    </div>
                    <div class="md:w-1/4 sm:w-1/2 w-full px-4">
                        <MemberCard/>
                    </div>
                    <div class="md:w-1/4 sm:w-1/2 w-full px-4">
                        <MemberCard/>
                    </div>
                    <div class="md:w-1/4 sm:w-1/2 w-full px-4">
                        <MemberCard/>
                    </div>
                </div>
            </div>
        </div>
    </section>  
</template>
<script>
import MemberCard from '../components/MemberCard.vue'
export default {
name:'Member',
components:{
    MemberCard
}
}
</script>