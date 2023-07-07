<template>
  <Header />
  <Banner />
  <BannerOptions />
  <BannerList />
  <BannerFooter />
</template>

<script>
import Header from "./Header.vue";
import Banner from "./Banner.vue";
import BannerOptions from "./BannerOptions.vue";
import BannerList from "./BannerList.vue";
import BannerFooter from "./BannerFooter.vue";

export default {
  name: "HelloWorld",
  components: {
    Header,
    Banner,
    BannerOptions,
    BannerList,
    BannerFooter,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
