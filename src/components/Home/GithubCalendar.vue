<template>
  <div class="github">
    <div class="container github__calendar">
      <p class="text">{{ $t("githubCalendar.subtext") }}</p>
      <a href="#" class="link-git">{{ $t("githubCalendar.header") }}</a>

      <div class="calendar"></div>
    </div>
  </div>
</template>

<script>
import GitHubCalendar from "github-calendar";

export default {
  mounted() {
    GitHubCalendar(".calendar", this.$config.social.github, {
      responsive: true,
      tooltips: true,
    });
  },
};
</script>


<style scoped>
.github {
  border-style: dashed;
  border-bottom-width: 1px;
  border-color: rgba(47, 49, 51, 1);
  border-right: none;
  border-left: none;
  border-top: none;
}
.container {
  border-style: dashed;
  border-bottom: none;
  border-color: rgba(47, 49, 51, 1);
  border-right-width: 1px;
  border-left-width: 1px;
  border-top: none;
  animation: 0.5s ease-out 0s 1 moveToUp;
}
@keyframes moveToUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.github__calendar {
  text-align: center;
}
.text {
  font-size: 0.75rem;
  color: rgba(79, 70, 229, 1);
  font-weight: 600;
  padding-top: 1rem;
}
.link-git {
  display: block;
  font-weight: 800;
  line-height: 2rem;
  letter-spacing: -0.025em;
  margin-top: 0.5rem;
  font-size: 1.875rem;
  color: rgba(85, 88, 90, 1);
  text-decoration: none;
  padding-bottom: 1rem;
}
.link-git:hover {
  color: rgba(253, 45, 120, 1);
}

>>> rect.ContributionCalendar-day[data-level="0"] {
  fill: currentColor;

  color: rgba(24, 25, 26, 1);
}

>>> rect.ContributionCalendar-day[data-level="1"] {
  fill: rgb(14, 68, 41);
}

>>> rect.ContributionCalendar-day[data-level="2"] {
  fill: rgb(0, 109, 50);
}

>>> rect.ContributionCalendar-day[data-level="3"] {
  fill: rgb(38, 166, 65);
}

>>> rect.ContributionCalendar-day[data-level="4"] {
  fill: rgb(57, 211, 83);
}

>>> .graph-before-activity-overview {
  border: none;
}

.calendar {
  border: none;
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  text-transform: lowercase;
  flex-wrap: wrap;
}

.calendar >>> .width-full {
  display: flex;
  justify-content: space-between;
}
.calendar >>> .width-full > .float-right {
  /* text-sm text-gray-400 flex flex-row items-center justify-center px-4; */
  font-size: 0.875rem;
  line-height: 1.25rem;
  flex-direction: row;
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: center;
  color: rgba(121, 123, 124, 1);
}
/* 
.calendar >>> .width-full > .float-right svg {
  margin-left: 0.125rem;
  margin-right: 0.125rem;
} */
>>> .calendar .position-relative {
  flex-basis: 100%;
}
.calendar >>> .width-full > .float-left a {
  /* @apply flex items-center justify-center; */
  display: flex;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  padding-left: 2rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: rgba(121, 123, 124, 1);
}

>>> .calendar #user-activity-overview {
  display: none;
}

>>> text.ContributionCalendar-label {
  font-size: 9px;
  fill: rgba(121, 123, 124, 1);
}

>>> .contrib-column {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px 0;
  text-align: center;
  font-size: 11px;
}

>>> .contrib-number {
  font-weight: 700;
  color: rgba(211, 212, 212, 1);
  line-height: 1.3em;
  font-size: 24px;
  display: block;
}

>>> .text-muted {
  color: rgba(121, 123, 124, 1);
}

/*@media (min-width: 768px) {*/
/*  .calendar {*/
/*    padding-right: 3rem !important;*/
/*  }*/
/*}*/
</style>
