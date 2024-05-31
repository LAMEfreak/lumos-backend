const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log("Server is running on port 8080");
});
