<template>
  <header class="header">
    <div class="container">
      <h1 class="header-title">
        LAGS Trainer <a href="#" class="hb-btn"><i class="fas fa-bars"></i></a>
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  padding: 0.5rem 0;
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
@media (min-width: 1024px) {
  .hb-btn {
    display: none;
  }
}
</style>
