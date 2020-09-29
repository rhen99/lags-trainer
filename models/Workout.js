const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sets: {
    type: Number,
    required: true,
  },
  exercises: [
    {
      name: {
        type: String,
        required: true,
      },
      repetition: {
        type: Number,
        required: true,
      },
      time: {
        type: Number,
        required: true,
      },
    },
  ],
  user_id: {
    type: String,
    required: true,
  },

  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Workout", workoutSchema);
