<template>
  <div class="subscribe-form">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <div class="line-dec"></div>
            <h1>Subscribe Our Shop now!</h1>
          </div>
        </div>
        <div class="col-md-8 offset-md-2">
          <div class="main-content">
            <p>Integer vel turpis ultricies, lacinia ligula id, lobortis augue. Vivamus porttitor dui id dictum efficitur. Phasellus vel interdum elit.</p>
            <div class="container">
              <form @submit.prevent id="app" @submit="checkForm" action="" method="get">
                <div class="row">
                  <ul v-if="errors.length">
                    <li v-bind:key="error" v-for="error in errors">{{ error }}</li>
                  </ul>
                </div>
                <div class="row">
                  <div class="col-md-7">
                    <fieldset>
                      <input v-model="email" name="email" type="text" class="form-control" id="email" placeholder="Your Email...">
                    </fieldset>
                  </div>
                  <div class="col-md-5">
                    <fieldset>
                      <button type="submit" id="form-submit" class="button">Subscribe Now!</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subscribe",
  data(){
    return{
      email:"",
      errors:[]
    }
  },
  methods:{
    checkForm: function (e) {
      if (this.email) {
        return true;
      }

      this.errors = [];

      if (!this.email) {
        this.errors.push('Email required.');
      }

      if (this.validateEmail(this.email)) {
        this.errors.push('Valid email required.');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validateEmail(email){
      console.log(email)
      return true;
    },
  }
}
</script>

<style>
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white!important;
  opacity: 1!important; /* Firefox */
}
</style>