<template>
  <div class="container">
    <div class="header flex">
      <div class="left flex">
        <div class="logo">Drake</div>
        <ul class="flex">
          <li>
            <router-link class="nav-link text-sm" to="/">{{
              $t("nav.home")
            }}</router-link>
          </li>
          <li>
            <router-link class="nav-link text-sm" to="/blog">{{
              $t("nav.blog")
            }}</router-link>
          </li>
          <li>
            <router-link class="nav-link text-sm" to="/projects">
              {{ $t("nav.projects") }}</router-link
            >
          </li>
          <li>
            <router-link class="nav-link text-sm" to="/uses">
              {{ $t("nav.uses") }}</router-link
            >
          </li>
          <li>
            <router-link class="nav-link text-sm" to="/resume">{{
              $t("nav.resume")
            }}</router-link>
          </li>
        </ul>
      </div>
      <div class="right flex">
        <div class="menu" @click="onChangeMenu">
          <div class="burger"></div>
        </div>
        <select class="language" v-model="locale">
          <option value="en">en</option>
          <option value="vn">vn</option>
        </select>
      </div>
    </div>
    <sidebar-mobile v-if="menuShow" v-on:close-menu="onChangeMenu" />
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import SidebarMobile from "./components/SidebarMobile.vue";
export default {
  components: { SidebarMobile },
  name: "Header",
  setup() {
    const { locale } = useI18n({ useScope: "global" });
    const menuShow = ref(false);
    function onChangeMenu() {
      menuShow.value = !menuShow.value;
    }
    return { locale, menuShow, onChangeMenu }; // you can return it with render context!
  },
};
</script>
<style lang="scss" scoped>
a.router-link-active {
  color: rgba(255, 255, 255, 1);
  font-weight: bold;
  cursor: pointer;
}
/* exact link will show the primary color for only the exact matching link */
a.router-link-exact-active {
  background-color: rgba(24, 25, 26, 1);

  color: rgba(255, 255, 255, 1) !important;
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
        color: crimson;
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
        display: none;
        width: 1.5rem;
        cursor: pointer;
        height: 20px;

        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        @include mobile {
          display: flex;
        }
        .burger {
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
      }

      .language {
        @include mobile {
          display: none;
        }
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