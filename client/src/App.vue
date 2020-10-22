<template>
  <div id="app">
    <Header />
    <div class="container push-down">
      <router-view/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from "./components/layouts/Header";

export default {
  name: "App",
  data(){
    return{
      workouts: [],
      user: null
   }
  },
  components: {
    Header
  },
  methods: {
    getUser(){
      axios.get('api/users', {
      headers:{
      "x-auth-token": localStorage.getItem('token')
    }
    })
    .then(res => this.user = {...res.data})
    .catch((err) => {
      console.log(err.response.data);
      localStorage.removeItem('token');
    })
    },
    getWorkouts(){
      axios.get('api/workouts', {
      headers:{
        "x-auth-token": localStorage.getItem('token')
      }
    })
    .then(res => this.workouts = [...res.data])
    .catch(err => console.log(err.response.data));

    }
  },
  mounted (){
    if(localStorage.getItem('token')){
      this.getUser();
      this.getWorkouts();
    }

    
  }
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
.card-title{
  text-align: center;
  font-size: 1.3rem;
  margin: .5rem 0;
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
  display: inline-block;
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
.error-alert{
  background-color: rgb(253, 181, 181);
  padding: 1rem;
}
</style>
