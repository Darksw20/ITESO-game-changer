const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { engine } = require("express-handlebars");

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "hbs");
app.set("views", "./views");

app.engine(
  "hbs",
  engine({
    extname: "hbs",
    defaultView: "default",
    layoutsDir: __dirname + "/views/pages/",
    partialsDir: __dirname + "/views/partials/",
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api", apiRouter);

module.exports = app;
