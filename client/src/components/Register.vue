<template>
  <div class="register d-flex justify-content-center align-items-center">
    <div class="card">
      <h1 class="card-title">Register</h1>
      <p v-if="error" class="error-alert">{{error}}</p>
      <form action="#" @submit="register">
        <div class="form-group">
          <label for="username">Name</label>
          <input type="text" v-model="name" class="form-control" id="name" />
        </div>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" v-model="username" class="form-control" id="username" />
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="text" v-model="email" class="form-control" id="email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" class="form-control" id="password" />
        </div>
        <div class="form-group">
          <label for="password_confirm">Confirm Password</label>
          <input type="password" v-model="password_confirm" class="form-control" id="password_confirm" />
        </div>
        <input
          type="submit"
          value="Register"
          class="btn btn-primary btn-block"
        />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "Register",
  data() {
    return {
      name: '',
      username: '',
      email: '',
      password: '',
      password_confirm: '',
      error: null
    }
  },
  methods: {
    setError(error){
      if(error){
        this.error = error
      }else{
        this.error = null
      }
    },
    register(e) {
      e.preventDefault();
      axios.post('api/users/register', {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm
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
    
  }
};
</script>

<style scoped>
.register {
  height: 80%;
}
input[type="submit"] {
  margin: 0.5rem 0;
}
</style>
