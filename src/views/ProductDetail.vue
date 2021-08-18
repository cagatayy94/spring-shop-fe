<template>
  <div class="single-product">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <div class="line-dec"></div>
            <h1>Single Product</h1>
          </div>
        </div>
        <div class="col-md-6">
          <div class="product-slider">
            <div id="slider" class="flexslider">

              <div class="flex-viewport" style="overflow: hidden; position: relative;"><ul class="slides" style="width: 800%; transition-duration: 0s; transform: translate3d(0px, 0px, 0px);">
                <li class="flex-active-slide" style="width: 303px; margin-right: 0px; float: left; display: block;">
                  <img src="assets/images/big-01.jpg" draggable="false">
                </li>
                <li style="width: 303px; margin-right: 0px; float: left; display: block;">
                  <img src="assets/images/big-02.jpg" draggable="false">
                </li>
                <li style="width: 303px; margin-right: 0px; float: left; display: block;">
                  <img src="assets/images/big-03.jpg" draggable="false">
                </li>
                <li style="width: 303px; margin-right: 0px; float: left; display: block;">
                  <img src="assets/images/big-04.jpg" draggable="false">
                </li>
                <!-- items mirrored twice, total of 12 -->
              </ul></div><ul class="flex-direction-nav"><li class="flex-nav-prev"><a class="flex-prev flex-disabled" href="#" tabindex="-1">Previous</a></li><li class="flex-nav-next"><a class="flex-next" href="#">Next</a></li></ul></div>
            <div id="carousel" class="flexslider">

              <div class="flex-viewport" style="overflow: hidden; position: relative;"><ul class="slides" style="width: 800%; transition-duration: 0s; transform: translate3d(0px, 0px, 0px);">
                <li class="flex-active-slide" style="width: 198px; margin-right: 5px; float: left; display: block;">
                  <img src="assets/images/thumb-01.jpg" draggable="false">
                </li>
                <li style="width: 198px; margin-right: 5px; float: left; display: block;">
                  <img src="assets/images/thumb-02.jpg" draggable="false">
                </li>
                <li style="width: 198px; margin-right: 5px; float: left; display: block;">
                  <img src="assets/images/thumb-03.jpg" draggable="false">
                </li>
                <li style="width: 198px; margin-right: 5px; float: left; display: block;">
                  <img src="assets/images/thumb-04.jpg" draggable="false">
                </li>
                <!-- items mirrored twice, total of 12 -->
              </ul></div><ul class="flex-direction-nav"><li class="flex-nav-prev"><a class="flex-prev flex-disabled" href="#" tabindex="-1">Previous</a></li><li class="flex-nav-next"><a class="flex-next" href="#">Next</a></li></ul></div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="right-content">
            <h4>Single Product Name</h4>
            <h6>$55.00</h6>
            <p>Proin commodo, diam a ultricies sagittis, erat odio rhoncus metus, eu feugiat lorem lacus aliquet arcu. Curabitur in gravida nisi, non placerat nibh. Praesent sit amet diam ultrices, commodo turpis id, dignissim leo. Suspendisse mauris massa, porttitor non fermentum vel, ullamcorper scelerisque velit. </p>
            <span>7 left on stock</span>
            <form action="" method="get">
              <label for="quantity">Quantity:</label>
              <input name="quantity" type="quantity" class="quantity-text" id="quantity" onfocus="if(this.value == '1') { this.value = ''; }" onblur="if(this.value == '') { this.value = '1';}" value="1">
              <input type="submit" class="button" value="Order Now!">
            </form>
            <div class="down-content">
              <div class="categories">
                <h6>Category: <span><a href="#">Pants</a>,<a href="#">Women</a>,<a href="#">Lifestyle</a></span></h6>
              </div>
              <div class="share">
                <h6>Share: <span><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-twitter"></i></a></span></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>