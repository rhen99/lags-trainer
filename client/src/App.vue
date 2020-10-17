<template>
  <div id="app">
    <Header />

    <div class="container push-down">
      <!-- <Login /> -->
      <!-- <Register /> -->
      <!-- <Workouts /> -->
      <Single/>
    </div>
  </div>
</template>

<script>
import Header from "./components/layouts/Header";
// import Login from "./components/Login";
// import Register from "./components/Register";
//import Workouts from "./components/Workouts";
import Single from './components/Single';
export default {
  name: "App",
  components: {
    Header,
    // Login,
    // Register,
    //Workouts,
    Single
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* Reset */
html,
body {
  font-family: "Lato", sans-serif;
  background-color: #f3f3f3;
  height: 100%;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
#app {
  width: 100%;
  height: 100%;
}

/* Utility */
.container {
  max-width: 1100px;
  height: 100%;
  margin: auto;
  padding: 0 1rem;
}
.push-down{
  margin-top: 41px;
}
.d-flex {
  display: flex;
}
.justify-content-center {
  justify-content: center;
}
.align-items-center {
  align-items: center;
}
.card {
  background-color: #fff;
  padding: 1.8rem 2.8rem;
  box-shadow: 3px 3px 10px rgba(48, 48, 48, 0.377);
}
.form-group {
  padding: 0.3rem 0.1rem;
}
.form-control {
  width: 100%;
  border: none;
  padding: 0.5rem 0.3rem;
  background-color: #f0f0f0;
}
.form-group label {
  padding: 0.5rem 0;
  display: inline-block;
}
.btn {
  border: none;
  background: transparent;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
}
.btn-primary {
  background-color: rgb(76, 43, 221);
  color: #fff;
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
