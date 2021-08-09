<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div class="container">
      <a class="navbar-brand" href="#"><img src="assets/images/header-logo.png" alt=""></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">

        <ul class="navbar-nav ml-auto">
          <li :class="{'active' : currentRoute === 'Home'}" class="nav-item">
            <router-link to="/" tag="a" class="nav-link">Home </router-link>
          </li>
          <li :class="{'active' : currentRoute === 'Products'}" class="nav-item">
            <router-link to="/products" tag="a" class="nav-link">Products</router-link>
          </li>
          <li :class="{'active' : currentRoute === 'AboutUs'}" class="nav-item">
            <router-link to="/about-us" tag="a" class="nav-link">About Us</router-link>
          </li>
          <li :class="{'active' : currentRoute === 'Contact'}" class="nav-item">
            <router-link to="/contact" tag="a" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  }
}
</script>

<style scoped>

</style>