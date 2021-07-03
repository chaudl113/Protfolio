<template>
  <div class="container">
    <div class="uses">
      <div class="uses-header">
        <h2>{{ $t("uses.header") }}</h2>
        <p>
          {{ $t("uses.subtext") }}
        </p>
      </div>
      <div class="uses__info">
        <a
          class="uses__info-codestats flex"
          :href="`https://codestats.net/users/${$config.social.codestats}`"
          target="_blank"
        >
          <div class="level">
            <p class="level-title">Level {{ level }}</p>
            <h4 class="level-xp">
              {{ totalXP ? totalXP.toLocaleString() : totalXP }} XP
              <span
                >from
                {{
                  totalXP - newXP
                    ? (totalXP - newXP).toLocaleString()
                    : totalXP - newXP
                }}</span
              >
            </h4>
          </div>
          <div class="ratio">
            <div class="icon flex">
              <svg
                data-v-e9ba933a=""
                fill="currentColor"
                viewBox="0 0 20 20"
                class="
                  -ml-1
                  mr-0.5
                  flex-shrink-0
                  self-center
                  h-5
                  w-5
                  text-green-400
                "
              >
                <path
                  data-v-e9ba933a=""
                  fill-rule="evenodd"
                  d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span> {{ newXP ? newXP.toLocaleString() : newXP }}</span>
            </div>
          </div>
        </a>

        <div class="computer__info">
          <div
            class="computer__info-laptop"
            v-for="(item, index) in $config.uses.meta"
            :key="index"
          >
            <p class="computer__info-laptop-title">
              {{ item.title }}
            </p>
            <p class="computer__info-laptop-info">
              {{ item.value }}
            </p>
          </div>
        </div>

       
      </div>
    </div>
  </div>
</template>

<script>

import { ref, onMounted, getCurrentInstance } from "vue";
export default {
  components: {
    
  },

  setup() {
    const totalXP = ref(null);
    const newXP = ref(null);
    const level = ref(null);
    function initValues({ total_xp, new_xp }) {
      totalXP.value = total_xp;
      newXP.value = new_xp;
      level.value = Math.floor(0.025 * Math.sqrt(total_xp));
    }
    const app = getCurrentInstance();
    const config = app.appContext.config.globalProperties.$config;
    function fetchData() {
      fetch(`https://codestats.net/api/users/${config.social.codestats}`)
        .then((resp) => resp.json())
        .then((data) => {
          initValues(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    onMounted(() => {
      fetchData();
    });

    return {
      totalXP,
      newXP,
      level,
    };
  },
};
</script>

<style lang="scss" scoped>
.uses {
  color: #fff;
  padding-bottom: 2.5rem;
  border-color: rgba(47, 49, 51, 1);
  border-style: dashed;
  border-right-width: 1px;
  border-left-width: 1px;
  border-top: none;
  border-bottom: none;
  &-header {
    text-align: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    color: rgba(211, 212, 212, 1);
    h2 {
      font-size: 1.5rem;
      line-height: 2rem;
      letter-spacing: -0.025em;
      font-weight: 800;
    }
    p {
      margin-top: 0.5rem;
      line-height: 1.75rem;
      font-size: 0.875rem;
      opacity: 0.5;
    }
  }
  &__info {
    max-width: 56rem;
    margin-left: auto;
    margin-right: auto;
    border-color: rgba(47, 49, 51, 1);
    border-style: dashed;
    border-width: 1px;
    border-radius: 0.5rem;
    &-codestats {
      text-decoration: none;
      justify-content: space-between;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;

      background-color: rgba(24, 25, 26, 1);
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
      .level {
        &-title {
          color: rgba(253, 45, 120, 1);
          font-weight: 400;
          font-weight: 400;
          font-size: 0.875rem;
        }
        &-xp {
          margin-top: 0.25rem;
          font-size: 1.5rem;
          color: rgba(79, 70, 229, 1);
          span {
            font-size: 0.875rem;
            margin-left: 0.5rem;
            color: rgba(85, 88, 90, 1);
          }
        }
      }
      .ratio {
        margin-top: auto;
        .icon {
          background-color: rgba(33, 35, 36, 1);
          padding-top: 0.125rem;
          padding-bottom: 0.125rem;
          padding-left: 0.625rem;
          padding-right: 0.625rem;
          border-radius: 9999px;
          color: rgba(52, 211, 153, 1);
          svg {
            width: 1.25rem;
          }
          font-size: 0.875rem;
        }
      }
    }
  }

  .computer__info {
    &-laptop {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      font-weight: 500;
      font-size: 0.875rem;
      color: rgba(85, 88, 90, 1);
      &:nth-child(2n) {
        background-color: rgba(24, 25, 26, 1);
      }
      &:last-child {
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
      }
    }
    .computer__info-laptop-info {
      grid-column: span 2 / span 2;
    }
  }
}
</style>