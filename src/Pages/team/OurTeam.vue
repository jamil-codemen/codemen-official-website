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
          <span
            class="
              prm-color
              rounded
              text-white
              px-4
              pb-4
              pt-2
              font-bold
              text-4xl
            "
            >Founders</span
          >
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
        <div class="text-center mt-24 mb-12">
          <span
            class="
              prm-color
              rounded
              text-white
              px-4
              pb-4
              pt-2
              font-bold
              text-4xl
            "
            >Full Stack</span
          >
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
        <div class="text-center mt-24 mb-12">
          <span
            class="
              prm-color
              rounded
              text-white
              px-4
              pb-4
              pt-2
              font-bold
              text-4xl
            "
            >Front End</span
          >
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
        <div class="text-center mt-24 mb-12">
          <span
            class="
              prm-color
              rounded
              text-white
              px-4
              pb-4
              pt-2
              font-bold
              text-4xl
            "
            >Back End</span
          >
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

export default {
  components: { Headline, TeamCard, PromotionCard },
  name: "OurTeam",
  data() {
    return {
      founderTeam: [
        {
          img: "zahid.jpg",
          employeeName: "Zahidur Rahman",
          employeeRole: "CEO & Founder",
          category: "founder",
        },
        {
          img: "Rana.jpg",
          employeeName: "Ibrahim Al Naz Rana",
          employeeRole: "CTO & Founder",
          category: "founder",
        },
        {
          img: "rabbi.jpg",
          employeeName: "Md. Golam Rabbi",
          employeeRole: "CAO & Founder",
          category: "founder",
        },
        {
          img: "robin.jpg",
          employeeName: "Md. Mizanur Rahman",
          employeeRole: "Web Developer",
          category: "fullStack",
        },
        {
          img: "hasib.jpg",
          employeeName: "Hasibur Rahman",
          employeeRole: "Web Developer",
          category: "fullStack",
        },
        {
          img: "shoaib.jpg",
          employeeName: "Md. Shoaib Hossain",
          employeeRole: "Web Developer",
          category: "fullStack",
        },
        {
          img: "sihab.jpg",
          employeeName: "Md. Sahabuddin Shaikh",
          employeeRole: "Web Developer",
          category: "frontEnd",
        },
        {
          img: "jamil.jpg",
          employeeName: "Kazi Safayet Jamil",
          employeeRole: "Web Developer",
          category: "frontEnd",
        },
        {
          img: "tasnuva.jpg",
          employeeName: "Tasnuva Rahman",
          employeeRole: "Web Developer",
          category: "frontEnd",
        },
        {
          img: "irina.jpg",
          employeeName: "Irina Tabassum",
          employeeRole: "Web Developer",
          category: "frontEnd",
        },
        {
          img: "aneek.jpg",
          employeeName: "Aneek Khan",
          employeeRole: "Web Developer",
          category: "frontEnd",
        },
        {
          img: "sohan.jpg",
          employeeName: "Ikbal Mahmud (Sohan)",
          employeeRole: "Web Developer",
          category: "frontEnd",
        },
         {
          img: "prapti.jpg",
          employeeName: "Tasnim Hossain",
          employeeRole: "Web Developer",
          category: "frontEnd",
        },
        {
          img: "nazmul.jpg",
          employeeName: "Inzamul Haq",
          employeeRole: "Web Developer",
          category: "frontEnd",
        },
           {
          img: "kamrul.jpg",
          employeeName: "Md. Kamruzzaman",
          employeeRole: "Web Developer",
          category: "backEnd",
        },
        {
          img: "biplob.jpg",
          employeeName: "Biplab Sarkar",
          employeeRole: "Web Developer",
          category: "backEnd",
        },
        {
          img: "dip.jpg",
          employeeName: "Deepayan Mallik",
          employeeRole: "Web Developer",
          category: "backEnd",
        },
        {
          img: "forhad.jpg",
          employeeName: "Forhad Hosen",
          employeeRole: "Web Developer",
          category: "backEnd",
        },
        {
          img: "mainul.jpg",
          employeeName: "Md Mainul Hasan",
          employeeRole: "Web Developer",
          category: "backEnd",
        },
        {
          img: "istiak.jpg",
          employeeName: "Istiak Ahmed",
          employeeRole: "Web Developer",
          category: "backEnd",
        },
        {
          img: "asad.jpg",
          employeeName: "Asaduzzam Sohel",
          employeeRole: "Web Developer",
          category: "backEnd",
        },
         {
          img: "alamin.jpg",
          employeeName: "Al Amin",
          employeeRole: "Web Developer",
          category: "backEnd",
        },
        {
          img: "suma.jpg",
          employeeName: "Soma Paul",
          employeeRole: "Web Developer",
          category: "backEnd",
        },
        
      ],
    };
  },
  computed:{
     founders(){
        let allEmployee=this.founderTeam
        let allFounders=allEmployee.filter(founder=>{
           return founder.category==='founder'
        })
        return allFounders;
     },
     fullStack(){
        let allEmployee=this.founderTeam
        let allFounders=allEmployee.filter(founder=>{
           return founder.category==='fullStack'
        })
        return allFounders;
     },
     frontEnd(){
        let allEmployee=this.founderTeam
        let allFounders=allEmployee.filter(founder=>{
           return founder.category==='frontEnd'
        })
        return allFounders;
     },
      backEnd(){
        let allEmployee=this.founderTeam
        let allFounders=allEmployee.filter(founder=>{
           return founder.category==='backEnd'
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