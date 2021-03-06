const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/workouts", require("./routes/api/workouts"));
app.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
