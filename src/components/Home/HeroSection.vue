<template>
  <div class="container">
    <div class="hero__section flex">
      <div class="hero__section-text">
        <a href="#" class="text-button">
          <span class="tech">i blog tech</span>
          <span class="look">have a look</span>
          <svg
            data-v-b904273a=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            class="
              transition
              duration-500
              transform
              block
              group-hover:rotate-180
              hover-arrow
              ml-2
              w-5
              h-5
              text-gray-500
            "
          >
            <path
              data-v-b904273a=""
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 class="title">
          your friendly neighborhood
          <div>
            <typewriter
              :speed="100"
              :full-erase="false"
              :interval="200"
              :words="toArray"
            >
            </typewriter>
          </div>
        </h1>
      </div>
      <div class="hero__section-img flex">
        <div class="photo">
          <img :src="require(`@/assets/${config.image}`)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

import { getCurrentInstance } from "vue";
export default {
  name: "Hero",

  setup() {
    const { ctx } = getCurrentInstance();
    const config = ctx.$config;
    const { t } = useI18n({ useScope: "global" });
    const toArray = t("hero.words").split(" ");

    return {
      config,
      toArray,
    };
  },
};
</script>

<style lang="scss" scoped>
.hero__section {
  padding-top: 2rem;
  padding-bottom: 2rem;
  flex-wrap: wrap;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  &-text,
  &-img {
    flex: 1;
  }

  &-text {
    text-align: left;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    .text-button {
      display: inline-flex;
      text-align: center;
      border-radius: 9999px;
      text-decoration: none;

      background-color: rgba(24, 25, 26, 1);
      padding: 0.125rem;
      padding-right: 0.5rem;
      font-size: 1rem;
      line-height: 1.5rem;

      .tech {
        letter-spacing: 0.025em;
        font-weight: 600;
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 1);
        padding-top: 0.125rem;
        padding-bottom: 0.125rem;
        line-height: 1.25rem;
        background-color: rgba(79, 70, 229, 1);
        border-radius: 9999px;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
      }

      .look {
        font-size: 0.75rem;
        font-weight: 600;
        margin-left: 1rem;
      }
      svg {
        width: 1.25rem;
        display: block;
        color: rgba(85, 88, 90, 1);
        margin-left: 0.5rem;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }

      &:hover {
        .look {
          color: rgba(211, 212, 212, 1);
        }
        svg {
          transform: rotate(180deg);
        }
      }
    }
    .title {
      margin-top: 1.5rem;
    }
  }

  &-img {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    justify-content: center;
    align-items: center;
  }
}

.typicalWrapper::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>

