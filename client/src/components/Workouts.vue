<template>
  <div class="workouts">
    <h2 class="title">Exercises</h2>
    <router-link class="btn btn-primary add" to="/add-workout">Add Workout</router-link>
    <ul class="workout-list">
      <li class="workout"><a href="#">Item</a></li>
      <li class="workout"><a href="#">Item</a></li>
      <li class="workout"><a href="#">Item</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Workouts",
};
</script>

<style scoped>
.add{
  margin: .5rem 0;
}
.title {
  padding: 1rem 0;
}
.workout a {
  display: block;
  width: 100%;
  height: 100%;
  padding: 1rem;
  color: #333;
  font-weight: 600;
}
.workout a:hover {
  background-color: rgba(76, 43, 221, 0.13);
}
</style>
