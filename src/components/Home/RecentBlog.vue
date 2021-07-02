<template>
  <div class="recent__blog">
    <div v-scrollanimation class="container">
      <p class="text">it takes a lot of time to write man</p>
      <a href="#" class="link-git">recent blogs</a>
      <div class="cards flex">
        <div class="card">
          <div class="subtext">dev</div>
          <div class="header">Lorem Ipsum Devo</div>
          <p>
            Lorem markdownum facinus tollensque aethera acutae ripa arbor
            duorum, vae. Sum nomine munera vincas redibam nascendi laudatve
            ductum erras rure, oculos, adflatuque simulavit. Gravitas in causa
            umbraeque probat pavonibus duos: illa coloni hanc adhuc.
          </p>
          <div class="poster flex">
            <div class="poster-img">
              <img src="@/assets/images/bigheadkarngyan.png" alt="" />
            </div>
            <div class="info">
              <div class="info-name">karn</div>
              <div class="info-date">
                May 22, 2020 <span class="info-time"> 3 min read </span>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="subtext">dev</div>
          <div class="header">Lorem Ipsum Devo</div>
          <p>
            Lorem markdownum facinus tollensque aethera acutae ripa arbor
            duorum, vae. Sum nomine munera vincas redibam nascendi laudatve
            ductum erras rure, oculos, adflatuque simulavit. Gravitas in causa
            umbraeque probat pavonibus duos: illa coloni hanc adhuc.
          </p>
          <div class="poster flex">
            <div class="poster-img">
              <img src="@/assets/images/bigheadkarngyan.png" alt="" />
            </div>
            <div class="info">
              <div class="info-name">karn</div>
              <div class="info-date">
                May 22, 2020 <span class="info-time"> 3 min read </span>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="subtext">dev</div>
          <div class="header">Lorem Ipsum Devo</div>
          <p>
            Lorem markdownum facinus tollensque aethera acutae ripa arbor
            duorum, vae. Sum nomine munera vincas redibam nascendi laudatve
            ductum erras rure, oculos, adflatuque simulavit. Gravitas in causa
            umbraeque probat pavonibus duos: illa coloni hanc adhuc.
          </p>
          <div class="poster flex">
            <div class="poster-img">
              <img src="@/assets/images/bigheadkarngyan.png" alt="" />
            </div>
            <div class="info">
              <div class="info-name">karn</div>
              <div class="info-date">
                May 22, 2020 <span class="info-time"> 3 min read </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}
.enter {
  opacity: 1;
  transform: translateY(0);
}
.cards {
  gap: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  @include mobile {
    flex-direction: column;
  }

  .card {
    border-radius: 0.75rem;
    padding: 1.25rem;
    background-color: rgba(24, 25, 26, 1);
    flex-direction: column;
    flex: 1 1 0%;
    display: flex;
    justify-content: space-between;
    color: #fff;
    text-align: left;
    padding: 1.25rem;

    .subtext {
      color: rgba(253, 45, 120, 1);
      font-size: 0.75rem;
      line-height: 1rem;
      font-weight: 500;
    }
    .header {
      color: rgba(211, 212, 212, 1);
      line-height: 1.75rem;
      font-weight: 600;
      margin-top: 0.125rem;
    }
    p {
      opacity: 0.5;
      margin-top: 0.5rem;
      font-size: 0.75rem;
      line-height: 1rem;
    }
    .poster {
      margin-top: 0.5rem;
      .info {
        margin-top: auto;
        margin-bottom: auto;

        margin-left: 0.75rem;
        &-name {
          font-size: 0.75rem;
          line-height: 1rem;
        }
        &-date {
          font-size: 0.75rem;
          line-height: 1rem;
          opacity: 0.5;
        }
      }
      .poster-img {
        width: 50px;
        height: 50px;
      }
    }
  }
}

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