<template>
  <div class="container">
    <div class="header flex">
      <div class="left flex">
        <div class="logo">D</div>
        <ul class="flex">
          <li>
            <router-link class="nav-link text-sm" to="/">{{
              t("nav.home")
            }}</router-link>
          </li>
          <li>
            <router-link class="nav-link text-sm" to="/blog">{{
              t("nav.blog")
            }}</router-link>
          </li>
          <li>
            <router-link class="nav-link text-sm" to="/projects">
              {{ t("nav.projects") }}</router-link
            >
          </li>
          <li>
            <router-link class="nav-link text-sm" to="/uses">
              {{ t("nav.uses") }}</router-link
            >
          </li>
          <li>
            <router-link class="nav-link text-sm" to="/résumé">{{
              t("nav.resume")
            }}</router-link>
          </li>
        </ul>
      </div>
      <div class="right flex">
        <div
          class="menu"
          :class="{ 'open-menu': menuShow }"
          @click="onChangeMenu"
        ></div>
        <select class="language" v-model="locale">
          <option value="en">en</option>
          <option value="vn">vn</option>
        </select>
      </div>
    </div>
    <sidebar-mobile v-if="menuShow" />
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import SidebarMobile from "./SidebarMobile.vue";
export default {
  components: { SidebarMobile },
  name: "Header",
  setup() {
    const { t, locale } = useI18n({ useScope: "global" });
    const menuShow = ref(true);
    function onChangeMenu() {
      menuShow.value = !menuShow.value;
    }
    return { t, locale, menuShow, onChangeMenu }; // you can return it with render context!
  },
};
</script>
<style lang="scss" scoped>
@import "../abstracts/mixins.scss";
a.router-link-active {
  color: rgba(255, 255, 255, 1);
  font-weight: bold;
  cursor: pointer;
}
/* exact link will show the primary color for only the exact matching link */
a.router-link-exact-active {
  color: rgba(255, 255, 255, 1) !important;
  background-color: rgba(47, 49, 51, 1);
  border-radius: 0.26rem;
}
.container {
 position: relative;
  .header {
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 4rem;
    align-items: center;
    color: rgba(167, 168, 168, 1);
    border-color: rgba(47, 49, 51, 1);
    border-style: dashed;
    border-right-width: 1px;
    border-left-width: 1px;
    border-top: none;
    border-bottom: none;
    .left {
      .logo {
        color: rgba(67, 56, 202, 1);
        animation: bounce 1s infinite;
        letter-spacing: -0.05em;
        font-weight: 800;
        font-size: 1.875rem;
        line-height: 2.25rem;
      }
      ul {
        @include mobile {
          display: none;
        }
        align-items: center;
        li {
          list-style: none;
          margin-left: 1.3rem;
          .nav-link {
            font-weight: 700;
            padding: 0.5rem 0.75rem;
            color: rgba(167, 168, 168, 1);
            &:hover {
              color: rgba(255, 255, 255, 1);
              background-color: rgba(47, 49, 51, 1);
              border-radius: 0.3rem;
            }
          }
        }
      }

      @keyframes bounce {
        0%,
        100% {
          transform: translateY(-5%);
          animation: cubic-bezier(0.4, 0, 1, 1);
        }
        50% {
          transform: translateY(0);
          animation: cubic-bezier(0, 0, 0.2, 1);
        }
      }
    }

    .right {
      gap: 1rem;
      align-items: center;
      .menu {
        height: 0.124rem;
        width: 1.5rem;
        background-color: #e5e7eb;
        justify-content: center;
        position: relative;
        transition: all 0.5s ease-in-out;
        &::after {
          position: absolute;
          content: "";
          height: 0.124rem;
          width: 1.5rem;
          background-color: #e5e7eb;
          transform: translateY(-6px);
          transition: all 0.5s ease-in-out;
        }
        &::before {
          position: absolute;
          content: "";
          height: 0.124rem;
          width: 1.5rem;
          background-color: #e5e7eb;
          transform: translateY(6px);
          transition: all 0.5s ease-in-out;
        }
      }
      .open-menu {
        transform: translateX(21px);
        background: transparent !important;
        &::after {
          transform: rotate(45deg) translate(-20px, 20px) !important;
        }
        &::before {
          transform: rotate(-45deg) translate(-20px, -20px) !important;
        }
      }

      .language {
        color: rgba(255, 255, 255, 1);
        padding: 0.45rem;
        border-radius: 5px;
        font-size: 0.875rem;
        outline: none !important;
        border: 1px solid rgba(0, 0, 0, 0.3);
        box-shadow: inset 0 1px 4px rgba(167, 168, 168, 1);
      }
    }
  }
}
</style>