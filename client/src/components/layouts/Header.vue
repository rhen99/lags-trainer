<template>
  <header class="header">
    <div class="container">
      <h1 class="header-title">
        LAGS Trainer
        <a href="#" class="hb-btn" @click="showNav"
          ><i class="fas fa-bars"></i
        ></a>
      </h1>
      <ul class="navigation hide-on-sm">
        <li class="navigation-item">
          <router-link to="/register">Register</router-link>
        </li>
        <li class="navigation-item">
          <router-link to="/login">Login</router-link>
        </li>
        <li class="navigation-item">
          <a href="#" @click="logout">Logout</a>
        </li>
      </ul>
    </div>
    <ul class="navigation navigation-mobile" :class="{show:show}">
        <li class="navigation-item" v-if="!isLoggedIn">
          <router-link to="/register">Register</router-link>
        </li>
        <li v-if="!isLoggedIn" class="navigation-item">
          <router-link to="/login">Login</router-link>
        </li>
        <li v-if="isLoggedIn" class="navigation-item">
          <a @click="logout" href="#">Logout</a>
        </li>
      </ul>
  </header>
  
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        show: false,
        isLoggedIn: false
      };
    },
    methods: {
      showNav(e) {
        e.preventDefault();
        this.show = !this.show;
      },
      logout(e){
        e.preventDefault();
        localStorage.removeItem('token');
        window.location.reload();
      }
    },
    created(){
      if(localStorage.getItem('token')){
        this.isLoggedIn = true;
      }else{
        this.isLoggedIn = false;
      }
    }
    
  };
</script>

<style scoped>
.header {
  padding: 0.5rem 0;
  overflow: hidden;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  background-color: #f3f3f3;
}
.header-title {
  font-size: 1.3rem;
  position: relative;
}
.hb-btn {
  position: absolute;
  right: 0;
  color: #333;
  display: inline-block;
  width: 25px;
  height: 100%;
}
.hb-btn i {
  display: inline-block;
  width: 100%;
  height: 100%;
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
.hide-on-sm{
  display: none;
}
.navigation-mobile{
  position: fixed;
  width: 100%;
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 150ms ease-in;
  background-color: #f3f3f3;
  top: 41px;
}
.show{
  transform: scale(1,1);
}

@media (min-width: 1024px) {
  .hb-btn {
    display: none;
  }
}
</style>
