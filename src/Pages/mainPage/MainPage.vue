<template>
    <Navbar />
  <router-view/>
  <Footer />
</template>

<style>

</style>
<script>
import Navbar from  '../../components/Navigation/Navbar.vue'
import Footer from "../../components/Footer/Footer.vue"
export default {
    name:"MainPage",
  components:{
    Navbar,
    Footer
  }
}
</script>