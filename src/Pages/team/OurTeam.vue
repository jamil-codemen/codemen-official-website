<template>
  <headline
    imgSource="bg-wide2.jpg"
    currentPageName="Our Team"
    currentLink="/ourteam"
  ></headline>
  <section id="our_team" class="md:px-24 px-0 pt-24">
    <div class="container max-w-screen-xl mx-auto md:px-6 px-4 py-12">
      <div class="">
        <div class="text-center mb-12">
          <custom-header firstSpan="Founders" block></custom-header>
        </div>
        <div class="row justify-center">
          <div
            class="md:w-1/4 sm:w-1/2 w-full md:pt-0 pt-10 px-4"
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
        <!------------------------- admin section --------------------------->
         <div class="text-center mt-24 mb-12">
          <custom-header firstSpan="Admins" block></custom-header>
        </div>
        <div class="row justify-center">
            <div class="md:w-1/4 sm:w-1/2 w-full md:pt-0 pt-10 px-4" v-for="employee in admins" :key="employee.name">
            <team-card
              :imgSource="employee.img"
              :employeeName="employee.employeeName"
              :employeeRole="employee.employeeRole"
            ></team-card>
          </div>
        </div>
        <!-----------------------------full stack section--------------------------------->
        <div class="text-center mt-24 mb-12">
         <custom-header firstSpan="Full Stack" block></custom-header>
        </div>
        <div class="row justify-center">
            <div class="md:w-1/4 sm:w-1/2 w-full md:pt-0 pt-10 px-4" v-for="employee in fullStack" :key="employee.name">
            <team-card
              :imgSource="employee.img"
              :employeeName="employee.employeeName"
              :employeeRole="employee.employeeRole"
            ></team-card>
          </div>
        </div>
        <!----------------------Front end section ------------------------------->
        <div class="text-center mt-24 mb-12">
          <custom-header firstSpan="Front End" block></custom-header>
        </div>
        <div class="row justify-center">
          <div class="md:w-1/4 sm:w-1/2 w-full md:pt-0 pt-10 px-4" v-for="employee in frontEnd" :key="employee.employeeName">
            <team-card
              :imgSource="employee.img"
              :employeeName="employee.employeeName"
              :employeeRole="employee.employeeRole"
            ></team-card>
          </div>
        </div>
        <!-----------------------------Back end section --------------------------------->
        <div class="text-center mt-24 mb-12">
        <custom-header firstSpan="Back Stack" block></custom-header>
        </div>
        <div class="row justify-center">
           <div class="md:w-1/4 sm:w-1/2 w-full md:pt-0 pt-10 px-4" v-for="employee in backEnd" :key="employee.employeeName">
            <team-card
              :imgSource="employee.img"
              :employeeName="employee.employeeName"
              :employeeRole="employee.employeeRole"
            ></team-card>
          </div>
        </div>
        <!---------------------------------------------Intern section------------------------------------------->
         <div class="text-center mt-24 mb-12">
          <custom-header firstSpan="Interns" block></custom-header>
        </div>
        <div class="row justify-center">
          <div class="md:w-1/4 sm:w-1/2 w-full md:pt-0 pt-10 px-4" v-for="employee in intern" :key="employee.employeeName">
            <team-card
              :imgSource="employee.img"
              :employeeName="employee.employeeName"
              :employeeRole="employee.employeeRole"
            ></team-card>
          </div>
        </div>
        <!-----------------------------------------office Staffs------------------------------------------------------->
        
        <!-------------------------------------------------------------------------->
      </div>
    </div>
    <div class="md:px-24 px-0 pb-24 mt-16">
      <promotion-card></promotion-card>
    </div>
  </section>
</template>
<script>
import Headline from "@/components/headline/Headline.vue";
import TeamCard from "@/components/teamCard/TeamCard.vue";
import PromotionCard from "@/components/promotionCard/PromotionCard.vue";
import CustomHeader from '@/components/customHeader/CustomHeader.vue';

export default {
  components: { Headline, TeamCard, PromotionCard, CustomHeader },
  name: "OurTeam",
  data() {
    return {
    };
  },
  computed:{
    Team(){
      return this.$store.state.Team;
    },
     founders(){
        let allEmployee=this.Team
        let allFounders=allEmployee.filter(founder=>{
           return founder.category==='founder'
        })
        return allFounders;
     },
     admins(){
        let allEmployee=this.Team
        let admins=allEmployee.filter(founder=>{
           return founder.category==='admin'
        })
        return admins;
     },
     fullStack(){
        let allEmployee=this.Team
        let allFounders=allEmployee.filter(founder=>{
           return founder.category==='fullStack'
        })
        return allFounders;
     },
     frontEnd(){
        let allEmployee=this.Team
        let allFounders=allEmployee.filter(founder=>{
           return founder.category==='frontEnd'
        })
        return allFounders;
     },
      backEnd(){
        let allEmployee=this.Team
        let allFounders=allEmployee.filter(founder=>{
           return founder.category==='backEnd'
        })
        return allFounders;
     },
     intern(){
        let allEmployee=this.Team
        let allFounders=allEmployee.filter(founder=>{
           return founder.category==='intern'
        })
        return allFounders;
     },
     staff(){
        let allEmployee=this.Team
        let allFounders=allEmployee.filter(founder=>{
           return founder.category==='staff'
        })
        return allFounders;
     },
  }
};
</script>
<style scoped>
.prm-color {
  background-color: #113335;
}
</style>