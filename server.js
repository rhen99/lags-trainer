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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
