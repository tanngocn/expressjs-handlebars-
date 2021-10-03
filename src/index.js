const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const route = require("./routes");
const db = require("./config/db");
const app = express();
const port = 3000;
// luon dung truoc route
app.use(express.static(path.join(__dirname, "public")));
// get value req.body formData
app.use(express.urlencoded({ extended: true }));
// get value axios, fetch
app.use(express.json());
app.use(methodOverride("_method"));

// connect db
db.connect();
route(app);

// HTTP Logger
app.use(morgan("combined"));
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
