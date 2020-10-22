<template>
   <div class="add_form d-flex justify-content-center align-items-center">
    <div class="card">
      <h1 class="card-title">Add Workout</h1>
      <p class="error-alert" v-if="error">{{error}}</p>
      <form @submit="addWorkout">
        <div class="form-group" v-if="!add_exercise">
          <label for="name">Name</label>
          <input type="text" class="form-control" v-model="name" id="name" />
        </div>
        <div class="form-group" v-if="!add_exercise">
          <label for="sets">Sets</label>
          <input type="number" v-model="sets" class="form-control" id="sets" min="3" />
        </div>
        <div class="form-group" v-if="add_exercise">
          <label for="exercise_name">Exercise Name</label>
          <input type="text" class="form-control" v-model="exercise_name" id="exercise_name" />
        </div>
        <div class="form-group" v-if="add_exercise">
          <label for="reps">Repetition</label>
          <input type="number" class="form-control" id="reps" v-model="repitition" min="1" />
        </div>
        <div class="form-group" v-if="add_exercise">
          <label for="minutes">Minutes</label>
          <input type="number" v-model="minutes" class="form-control" id="minutes" min="1" max="59" />
        </div>
        <div class="form-group" v-if="add_exercise">
          <label for="seconds">Seconds</label>
          <input type="number" v-model="seconds" class="form-control" id="seconds" min="0" max="59" />
        </div>
        <div class="actions" v-if="!add_exercise">
            <router-link to="/" class="btn cancel">Cancel</router-link>
            <button @click="toggleForm" class="next btn btn-primary">Next</button>
        </div>
        <div class="actions" v-if="add_exercise">
            <button class="btn cancel" @click="toggleForm">Back</button>
            <button class="btn btn-primary next">Add</button>
        </div>
        <ul v-if="add_exercise" class="exercise_list">
          <li class="exercise_list_item"><span>Exercise Name</span> <a href="#" class="remove"><i class="fas fa-times"></i></a></li>
          <li class="exercise_list_item"><span>Exercise Name</span> <a href="#" class="remove"><i class="fas fa-times"></i></a></li>
          <li class="exercise_list_item"><span>Exercise Name</span> <a href="#" class="remove"><i class="fas fa-times"></i></a></li>
        </ul>
        <div class="actions" v-if="add_exercise">
            <input type="submit" class="btn btn-primary btn-block" value="Submit Workout">
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
    toggleForm(e){
      e.preventDefault();
      this.add_exercise = !this.add_exercise
    },
    addExercise(e) {
      e.preventDefault();
    },
    
  },
  
  data(){
      return{
          name: '',
          sets: 3,
          exercises: [],
          exercise_name: '',
          repetition: 1,
          minutes: 1,
          seconds: 0,
          time: 0,
          error: null,
          add_exercise: false
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
.exercise_list{
  margin: 1rem 0;
  border: 1px solid rgb(85, 85, 85);
}
.exercise_list_item:first-child{
  border-top: none;
}
.exercise_list_item{
  padding: 1rem .5rem;
  border-top: 1px solid rgb(85, 85, 85);
}
.remove{
  float: right;
}
</style>