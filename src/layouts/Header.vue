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
        <div class="languge" @click="onChangeActiveLang">
          <img
            class="icon-lang"
            :src="require(`@/assets/${locale}.svg`)"
            alt=""
          />{{ locale }}
          <svg
            class="icon-dropdown"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 491.996 491.996"
            style="enable-background: new 0 0 491.996 491.996"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848
			L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128
			c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084
			c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224
			C491.996,136.902,489.204,130.046,484.132,124.986z"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
          <transition name="slide">
            <div class="languge-select" v-show="langShow">
              <ul>
                <li
                  @click="onChangeLang(item.lang)"
                  v-for="(item, index) in $config.lang.meta"
                  :key="index"
                >
                  <img
                    class="icon-lang"
                    :src="require(`@/assets${item.icon}`)"
                    alt=""
                  />
                  {{ item.lang }}
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <sidebar-mobile v-if="menuShow" v-on:close-menu="onChangeMenu" />
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { ref, watch } from "vue";
import SidebarMobile from "./components/SidebarMobile.vue";
import { useRoute } from "vue-router";
export default {
  components: { SidebarMobile },
  name: "Header",
  setup() {
    const { locale } = useI18n({ useScope: "global" });
    const menuShow = ref(false);
    const langShow = ref(false);
    const route = useRoute();
    function onChangeMenu() {
      menuShow.value = !menuShow.value;
    }
    function onChangeActiveLang() {
      langShow.value = !langShow.value;
    }
    function onChangeLang(value) {
      locale.value = value;
    }
    watch(route, () => {
      menuShow.value = false;
      langShow.value = false;
    });
    return {
      locale,
      menuShow,
      onChangeMenu,
      langShow,
      onChangeActiveLang,
      onChangeLang,
    }; // you can return it with render context!
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

      .languge {
        @include mobile {
          display: none;
        }
        display: flex;
        padding: 0.45rem;
        cursor: pointer;
        border-radius: 10px;
        color: #fff;
        font-size: 0.875rem;
        outline: none !important;
        background-color: #5b48d9;
        border: 1px solid rgba(0, 0, 0, 0.3);
        box-shadow: inset 0 1px 4px rgba(167, 168, 168, 1);
        position: relative;
        .icon-lang {
          width: 1.25rem;
          margin-right: 0.5rem;
          border-radius: 10px;
        }
        .icon-dropdown {
          width: 0.5rem;
          margin-left: 0.7rem;
        }
        .languge-select {
          position: absolute;
          left: 0;
          width: 100%;
          top: 2.5rem;
          ul {
            background-color: #5b48d9;
            border-radius: 10px;
            border: 1px solid rgba(0, 0, 0, 0.3);
            box-shadow: inset 0 1px 4px rgba(167, 168, 168, 1);
            li {
              display: flex;
              list-style: none;
              margin: 0.4rem;
              padding-left: 0.4rem;
              padding-top: 0.3rem;
              padding-bottom: 0.3rem;
              &:hover {
                background: #333;
                border-radius: 0.4rem;
              }
            }
          }
        }
      }
    }
  }

  .slide-enter-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
  }
  .slide-enter-active {
    transition: all 0.3s ease;
  }
  .slide-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>