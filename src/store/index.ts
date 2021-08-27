import { createStore } from 'vuex'

// export default createStore({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })


const store =createStore({
  state(){
    return {
      Team: [
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
          img: "rana-saha.jpg",
          employeeName: "Rana Saha",
          employeeRole: "HR & Administrator",
          category: "admin",
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
          img: "amit.jpg",
          employeeName: "Amit Golder",
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
        {
          img: "pappu.jpg",
          employeeName: "Tanmoy Kar Pappu",
          employeeRole: "Intern(Front End)",
          category: "intern",
        },
         {
          img: "labib.jpg",
          employeeName: "Labib Hassan",
          employeeRole: "Intern(Front End)",
          category: "intern",
        },
        {
          img: "riaz.jpg",
          employeeName: "Md.Riaz",
          employeeRole: "Office Staff",
          category: "staff",
        },
        
      ],
      skills:[
        {img:"go.png",skillName:"Go Lang"},
        {img:"vuejs.png",skillName:"Vue JS"},
        {img:"laravel.png",skillName:"Laravel"}
      ]
    }
  }
})

export default store;