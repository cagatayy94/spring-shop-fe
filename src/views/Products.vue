<template>
  <!-- Page Content -->
  <!-- Items Starts Here -->
  <div class="featured-page">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <div class="section-heading">
            <div class="line-dec"></div>
            <h1>Featured Items</h1>
          </div>
        </div>
        <div class="col-md-8 col-sm-12">
          <div id="filters" class="button-group">
            <button class="btn btn-primary" data-filter="*">All Products</button>
            <button class="btn btn-primary" data-filter=".new">Newest</button>
            <button class="btn btn-primary" data-filter=".low">Low Price</button>
            <button class="btn btn-primary" data-filter=".high">Hight Price</button>
          </div>
        </div>
      </div>
    </div>
  </div>
<!--  -->
  <div v-if="products" class="featured container no-gutter">
    <div class="row posts">
      <div v-for="product in products" v-bind:key="product.id" class="item new col-md-4">
        <a href="single-product.html">
          <div class="featured-item">
            <img v-bind:src="randomPic()" alt="">
            <h4>{{product.name}}</h4>
            <h6>${{product.price/100}}</h6>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div class="page-navigation">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul>
            <li class="current-page"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Featred Page Ends Here -->
</template>
<script>
export default {
  name: 'Products',
  computed:{
    products(){
      return this.$store.getters.getProducts
    },
  },
  methods : {
    randomPic : function(){
      return this.images[Math.floor(Math.random()*this.images.length)];
    }
  },
  data() {
    return {
      images: [
          "assets/images/product-01.jpg",
          "assets/images/product-02.jpg",
          "assets/images/product-03.jpg",
          "assets/images/product-04.jpg",
          "assets/images/product-05.jpg",
          "assets/images/product-06.jpg",
      ],
    };
  },
}
</script>