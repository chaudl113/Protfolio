<template>
  <div class="hero">
    <div class="container">
      <div class="hero__section flex">
        <div class="hero__section-text">
       
          <h1 class="title">
            {{ $t("hero.friendlyNeighborhood") }}
            <div>
              freelancer
              <TypewriterComponent
                :speed="130"
                :full-erase="true"
                :interval="400"
                :words="toArray"
              >
              </TypewriterComponent>
            </div>
          </h1>
          <p class="text">
            {{ $t("hero.description") }}
          </p>
          <p class="worked__at-title">worked at</p>
          <div class="flex worked__at">
            <div
              class="worked__at-photo"
              v-for="(item, index) in config.workedAt.meta"
              :key="index"
            >
              <a :href="item.url"
                ><img :src="require(`@/assets${item.src}`)" alt=""
              /></a>
            </div>
          </div>
        </div>
        <div class="hero__section-img flex">
          <div class="photo">
            <img :src="require(`@/assets/${config.image}`)" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { getCurrentInstance } from "vue";
import TypewriterComponent from "./components/Typewriter";

export default {
  name: "Hero",
  components: {
    TypewriterComponent,
  },
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
/* switch transitions */

@keyframes scale {
  from {
    transform: scale(0.6);
  }
  to {
    transform: scale(1);
  }
}
.hero {
  border-style: dashed;
  border-bottom-width: 1px;
  border-color: rgba(47, 49, 51, 1);
  border-right: none;
  border-left: none;
  border-top: none;
  .container {
    .hero__section {
      animation: 0.5s ease-out 0s 1 scale;
      padding-top: 2rem;
      padding-bottom: 2rem;
      flex-wrap: wrap;
      text-align: center;
      color: rgba(255, 255, 255, 1);
      border-style: dashed;
      border-top: 0px;
      border-bottom: 0px;
      border-color: rgba(47, 49, 51, 1);
      border-right-width: 1px;
      border-left-width: 1px;
      @include mobile {
        flex-direction: column;
        gap: 1rem;
      }

      &-text,
      &-img {
        flex: 1;
      }

      &-text {
        border-style: dashed;
        border-right-width: 1px;
        border-left: none;
        border-top: none;
        border-bottom: none;
        border-color: rgba(47, 49, 51, 1);
        text-align: left;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        .text-button {
          display: inline-flex;
          text-align: center;
          border-radius: 9999px;
          text-decoration: none;
          color: rgba(255, 255, 255, 1);
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
            background-color: crimson;
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
          font-size: 1.875rem;
          line-height: 2.25rem;
          font-weight: 800;
          .typewriter {
            color: crimson;
          }
        }
        .text {
          font-size: 1.05rem;
          line-height: 1.5rem;
          margin-top: 1.25rem;
          opacity: 0.5;
        }
        .worked__at {
          width: 100%;
          flex-wrap: wrap;
          align-items: flex-start;
          margin-top: 1.25rem;
          &-title {
            margin-top: 2.5rem;
            font-weight: 600;
          }
          &-photo {
            flex: 1;
            &:not(:first-child) {
              text-align: center;
            }
            img {
              margin: auto;
              width: auto;
              height: 2.25rem;
              @include mobile {
                height: 2rem;
              }
            }
          }
        }
      }

      &-img {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>

