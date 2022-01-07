const express = require("express");
require("dotenv").config();
require("express-async-errors");
require("./db/knex");

const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./controllers/user"));

app.listen(3000, () => {
  console.log("Listen and serve at http://localhost:3000");
});
