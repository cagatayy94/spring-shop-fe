<template>
  <div class="home">
    <Banner />
    <Featured />
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
export default {
  name: 'Home',
  components: {
    Banner,
    Featured
  },
}
</script>
