<template>
  <section class="md:px-24 px-0 py-24">
    <div class="container max-w-screen-xl mx-auto md:px-6 px-4">
      <div class="">
        <div class="title text-center">
          <div class="w-full space-y-6">
              <custom-header headerClass="font-bold text-4xl text-gray-800" firstSpan="Our " SecondSpan="Team" blockSecond></custom-header>
            <p class="text-gray-700">
              We work intensively in search of ideals that can add up in the
              lives of our customers. <br />This is what moves us and we are
              grateful for the recognition.
            </p>
          </div>
        </div>
        <div class="row justify-center">
          <div
            class="group mt-16 px-4 w-full md:w-1/2 lg:w-1/4"
            v-for="founder in founders"
            :key="founder.employeeName"
          >
            <team-card
              :imgSource="founder.img"
              :employeeName="founder.employeeName"
              :employeeRole="founder.employeeRole"
            ></team-card>
          </div>
        </div>
        <div class="mt-16 flex justify-center">
          <custom-button
            buttonClass="bg-green-500 hover:bg-gray-900 font-bold text-white"
            isLink="true"
            content="See More"
          ></custom-button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CustomButton from "@/components/button/CustomButton.vue";
import TeamCard from "@/components/teamCard/TeamCard.vue";
import CustomHeader from '@/components/customHeader/CustomHeader.vue';

export default {
  components: { CustomButton, TeamCard, CustomHeader },
  name: "TeamSection",
  data() {
    return {
    };
  },
  computed:{
    founders(){
      let Team =this.$store.state.Team
      let allFounders=Team.filter(founder=>{
           return founder.category==='founder'
        })
        return allFounders;
    }
  }
};
</script>
<style scoped>
.prm-color {
  background-color: #113335;
}
</style>