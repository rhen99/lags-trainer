<template>
  <div class="login d-flex justify-content-center align-items-center">
    <div class="card">
      <form action="#">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" />
        </div>
        <div class="form-group">
          <label for="username">Password</label>
          <input type="password" class="form-control" id="password" />
        </div>
        <input type="submit" value="Login" class="btn btn-primary btn-block" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
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
