<template>
  <div class="register d-flex justify-content-center align-items-center">
    <div class="card">
      <form action="#">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" />
        </div>
        <div class="form-group">
          <label for="username">Email Address</label>
          <input type="text" class="form-control" id="username" />
        </div>
        <div class="form-group">
          <label for="username">Password</label>
          <input type="password" class="form-control" id="password" />
        </div>
        <div class="form-group">
          <label for="username">Confirm Password</label>
          <input type="password" class="form-control" id="password" />
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
export default {
  name: "Register",
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
