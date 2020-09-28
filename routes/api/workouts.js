const express = require("express");
const router = express.Router();
const Workout = require("../../models/Workout");

// @method GET api/workouts
// @desc Get all the user's workouts
// @access Private

router.get("/", async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Server Error",
    });
  }
});

// @method POST api/workouts/create
// @desc Create a workout
// @access Private

router.post("/create", async (req, res) => {
  const { name, sets, exercises } = req.body;
  if (!name || !sets || !exercises)
    return res.status(400).json({
      msg: "Please fill in all fields.",
    });
  if (exercises.length < 1)
    return res.status(400).json({
      msg: "Please fill in your exercises.",
    });
  exercises.forEach((exercise) => {
    if (!exercise.name || !exercise.repetition || !exercise.time)
      return res.status(400).json({
        msg: "Please complete your exercise information.",
      });
  });

  try {
    const newWorkout = await new Workout({
      name,
      sets,
      exercises,
    });
    await newWorkout.save();
    res.json({
      msg: "Created Successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Server Error",
    });
  }
});

// @method PUT api/workouts/:id
// @desc Update a workout
// @access Private

router.put("/:id", async (req, res) => {
  try {
    await Workout.updateOne(
      { _id: req.params.id },
      {
        ...req.body,
      }
    );
    const workout = await Workout.findById(req.params.id);
    res.json({
      msg: "Updated Successfully",
      updated_workout: workout,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Server Error",
    });
  }
});

// @method DELETE api/workouts/:id
// @desc Delete a workout
// @access Private

router.delete("/:id", async (req, res) => {
  try {
    await Workout.deleteOne({ _id: req.params.id });
    res.json({
      msg: "Deleted Successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Server Error",
    });
  }
});

module.exports = router;
