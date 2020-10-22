<template>
  <div class="login d-flex justify-content-center align-items-center">
    <div class="card">
      <h1 class="card-title">Login</h1>
      <p class="error-alert" v-if="error">{{error}}</p>
      <form @submit="login">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" v-model="username" class="form-control" id="username" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" class="form-control" id="password" />
        </div>
        <input type="submit" value="Login" class="btn btn-primary btn-block" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Login",
  methods: {
    setError(error){
      if(error){
        this.error = error
      }else{
        this.error = null
      }
    },
    login(e) {
      e.preventDefault();
      axios.post('api/users/login', {
        username: this.username,
        password: this.password,
     
      })
      .then(res => {
        this.setError(null)
        localStorage.setItem('token', res.data.token);
        window.location.reload();
      })
      .catch(err => {
        this.setError(err.response.data.msg)
      })
    },
  },
  data() {
    return {
      username:'',
      password: '',
      error: null,
    }
  },
};
</script>

<style scoped>
.login {
  height: 70%;
}
input[type="submit"] {
  margin: 0.5rem 0;
}
</style>
