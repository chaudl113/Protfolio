<template>
  <div class="sidebar__mobi flex flex-column">
    <div class="mobi-bg">
      <div class="mobi-top flex">
        <div class="logo">D</div>
        <div @click="closeMenu" class="close"></div>
      </div>
      <ul class="flex flex-column">
        <li class="text-base">
          <router-link class="nav-link" to="/">{{ t("nav.home") }}</router-link>
        </li>
        <li class="text-base">
          <router-link class="nav-link" to="/blog">{{
            t("nav.blog")
          }}</router-link>
        </li>
        <li class="text-base">
          <router-link class="nav-link" to="/projects">
            {{ t("nav.projects") }}</router-link
          >
        </li>
        <li class="text-base">
          <router-link class="nav-link" to="/uses">
            {{ t("nav.uses") }}</router-link
          >
        </li>
        <li class="text-base">
          <router-link class="nav-link" to="/resume">{{
            t("nav.resume")
          }}</router-link>
        </li>
      </ul>
      <div class="language">
        <div @click="onChangeLang(locale)" class="select-lang">
          {{ locale }}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { useI18n } from "vue-i18n";
export default {
  name: "Header",
  setup(_, context) {
    const { t, locale } = useI18n({ useScope: "global" });

    function onChangeLang(payload) {
      switch (payload) {
        case "vn":
          locale.value = "en";
          break;
        default:
          locale.value = "vn";
          break;
      }
    }

    function closeMenu() {
      context.emit("close-menu");
    }
    return { t, locale, onChangeLang, closeMenu }; // you can return it with render context!
  },
};
</script>
<style lang="scss" scoped>
.sidebar__mobi {
  width: 100%;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

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
      .logo {
        color: rgba(67, 56, 202, 1);
        animation: bounce 1s infinite;
        letter-spacing: -0.05em;
        font-weight: 800;
        font-size: 1.875rem;
        line-height: 2.25rem;
      }

      .close {
        cursor: pointer;
        height: 30px;
        width: 30px;

        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        position: relative;
        &::after {
          position: absolute;
          content: "";
          height: 0.124rem;
          width: 1.1rem;
          background-color: rgba(121, 123, 124, 1);
          transform: rotate(-45deg) !important;
          transition: all 0.5s ease-in-out;
        }
        &::before {
          position: absolute;
          content: "";
          height: 0.124rem;
          width: 1.1rem;
          background-color: rgba(121, 123, 124, 1);
          transform: rotate(45deg) !important;
          transition: all 0.5s ease-in-out;
        }
        &:hover {
          background-color: #fff;
          border-radius: 0.15rem;
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

    ul {
      padding-bottom: 0.75rem;
      padding-top: 0.5rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      li {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        border-radius: 0.375rem;
        transition-duration: 150ms;

        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
          color: rgb(255, 255, 255);
          background-color: rgba(64, 67, 69, 1);
        }
        .nav-link {
          color: rgba(211, 212, 212, 1);
          font-weight: 500;
        }
      }
    }
    .language {
      width: 100%;
      .select-lang {
        text-align-last: center;
        width: 100%;
        font-weight: 500;
        color: rgba(211, 212, 212, 1);
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        text-align: center;
        outline: none;
        background-color: rgba(67, 56, 202, 1);
        border-radius: 0 0 0.5rem 0.5rem;
        cursor: pointer;
      }

      &:hover {
        color: rgba(211, 212, 212, 1);
        background-color: rgba(79, 70, 229, 1);
      }
    }
  }
}
</style>