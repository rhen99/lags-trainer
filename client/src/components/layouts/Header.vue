<template>
  <header class="header" :class="{ hide: hide }">
    <div class="container">
      <h1 class="header-title">
        LAGS Trainer
        <a href="#" class="hb-btn" @click="showNav"
          ><i class="fas fa-bars"></i
        ></a>
      </h1>
      <ul class="navigation">
        <li class="navigation-item">
          <a href="#">Register</a>
        </li>
        <li class="navigation-item">
          <a href="#">Login</a>
        </li>
        <li class="navigation-item">
          <a href="#">Logout</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        hide: true,
      };
    },
    methods: {
      showNav(e) {
        e.preventDefault();
        this.hide = !this.hide;
      },
    },
  };
</script>

<style scoped>
.header {
  padding: 0.5rem 0;
  overflow: hidden;
  /*  */
}
.header-title {
  font-size: 1.3rem;
  position: relative;
}
.hb-btn {
  position: absolute;
  right: 0;
  color: #333;
}

.navigation-item a {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0.8rem;
  font-size: 0.8rem;
  color: #333;
  font-weight: 600;
}
.hide {
  max-height: 41px;
}
@media (min-width: 1024px) {
  .hb-btn {
    display: none;
  }
}
</style>
