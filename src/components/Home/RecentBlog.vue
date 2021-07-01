<template>
  <div class="recent__blog">
    <sequential-entrance >
      <div class="container">
        <p class="text">it takes a lot of time to write man</p>
        <a href="#" class="link-git">recent blogs</a>
      </div>
    </sequential-entrance>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.recent__blog {
  border-style: dashed;
  border-bottom-width: 1px;
  border-color: rgba(47, 49, 51, 1);
  border-right: none;
  border-left: none;
  border-top: none;
  .container {
    border-style: dashed;
    border-bottom: none;
    border-color: rgba(47, 49, 51, 1);
    border-right-width: 1px;
    border-left-width: 1px;
    border-top: none;
    text-align: center;
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
  }
}
</style>