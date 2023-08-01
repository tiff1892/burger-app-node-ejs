const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "frontend/views"));
app.use("/static", express.static(path.join(__dirname, "frontend/static")));

/* Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* ROUTES */
const appRoute = require("./backend/routes/app");
app.use("/", appRoute);

//to RUN
const PORT = 3001;

const mysql = require("mysql");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "tiffburger",
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);

  pool.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results[0].solution);
  });
});
