<template>
  <div>
    <PreHeader v-if="preHeaderActive" />
    <Navigation />
    <router-view/>
    <Subscribe />
    <Footer />
    <SubFooter />
  </div>
</template>
<script>
import PreHeader from "./components/PreHeader";
import Navigation from "./components/Navigation";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import SubFooter from "./components/SubFooter";
export default {
  components: {SubFooter, Footer, Subscribe, Navigation, PreHeader},
  data(){
    return {
      preHeaderActive:false
    }
  },
  created() {
    this.$store.dispatch("initApp")
  }
}
</script>