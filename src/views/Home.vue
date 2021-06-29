<template>
  <Header />
  <hero-section />
</template>
<script>
import HeroSection from "../components/Home/HeroSection.vue";
import Header from "../layouts/Header.vue";
export default {
  name: "Home",
  components: { Header, HeroSection },
};
</script>

<style lang="scss" scoped>
.home {
  color: white;
}
</style>