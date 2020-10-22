<template>
   <div class="add_form d-flex justify-content-center align-items-center">
    <div class="card">
      <p class="error-alert" v-if="error">{{error}}</p>
      <form @submit="addWorkout">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="form-group">
          <label for="sets">Sets</label>
          <input type="number" class="form-control" id="sets" />
        </div>
        <div class="actions">
            <router-link to="/" class="btn cancel">Cancel</router-link>
            <button class="next btn btn-primary">Next</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name: "AddWorkout",
    methods: {
    setError(error){
      if(error){
        this.error = error
      }else{
        this.error = null
      }
    },
    addWorkout(e) {
      e.preventDefault();
    },
    addExercise(e) {
      e.preventDefault();
    },
  },
  data(){
      return{
          name: null,
          sets: null,
          exercises: [],
          exercise_name: null,
          repetition: null,
          time: null
      }
  }
}
</script>

<style scoped>
.add_form {
  height: 70%;
}
.actions{
    margin: .5rem 0;
}
.next {

  float: right;
}
</style>