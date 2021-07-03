<template>
  <hero-section />
  <github-calendar />
  <recent-blog />
</template>
<script>
import GithubCalendar from "@/components/Home/GithubCalendar.vue";
import HeroSection from "@/components/Home/HeroSection.vue";

import RecentBlog from "@/components/Home/RecentBlog.vue";

export default {
  name: "Home",
  components: {  HeroSection, GithubCalendar, RecentBlog },
};
</script>

<style lang="scss" scoped>
.home {
  color: white;
}
</style>