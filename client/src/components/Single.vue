<template>
  <div class="timer-container">
      <div class="timer">
            <div class="circle">
                <div class="content">
                    <h1 class="exercise_title">Stand Up</h1>
                    <h1 class="time">{{minutes}}:{{seconds}}</h1>
                    <div class="sets_reps">
                        <div class="sets">
                            <p class="number">
                                {{sets}}
                            </p>
                            <p class="text">
                                Set(s)
                            </p>
                        </div>
                        <div class="reps">
                            <p class="number">
                                {{reps}}
                            </p>
                            <p class="text">
                                Rep(s)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p class="btn-group">
                <button class="timer_btn">Back</button>
                <button class="timer_btn">Start</button>
                <button class="timer_btn">Next</button>
            </p>
      </div>
  </div>
</template>

<script>
export default {
    name: "Single",
    data() {
        return{
            ticking: false,
            minutes: '00',
            seconds: '00',
            reps: 0,
            sets: 0,
            exercises: []
        }
    },
    methods: {
        toggleTimer(){
           this.ticking = !this.ticking
        },  
    },
    created(){
        
    }


}
</script>

<style scoped>
    .timer-container{
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .circle{
        width: 240px;
        height: 240px;
        background-color: #ddd;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid  rgb(76, 43, 221);
    }
    .content{
        width: 100%;
    }
    .exercise_title{
        font-size: 1.5rem;
    }
    .timer_btn{
        margin: .6rem 0.3rem;
        font-size: 1.2rem;
        border: none;
        background-color: rgb(76, 43, 221);
        color: #fff;
        font-weight: 500;
        padding: .5rem 1rem;
    }
    .sets_reps{
        font-weight: 700;
    }
</style>