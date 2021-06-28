<template>
  <div class="sidebar__mobi flex flex-column">
    <div class="mobi-bg">
      <div class="mobi-top flex">
        <div class="logo">D</div>
        <div class="close">D</div>
      </div>
    </div>
  </div>
</template>


<script>
import { useI18n } from "vue-i18n";
export default {
  name: "Header",
  setup() {
    const { t, locale } = useI18n({ useScope: "global" });
    return { t, locale }; // you can return it with render context!
  },
};
</script>
<style lang="scss" scoped>
.sidebar__mobi {
  width: 100%;
  height: 500px;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  .mobi-bg {
    width: 100%;
    height: 100%;
    background-color: rgba(24, 25, 26, 1);
    border-radius: 0.5rem;
    overflow: hidden;


    .mobi-top {
      padding-left: 1.25rem;
      padding-top: 1rem;
      padding-right: 1.25rem;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>