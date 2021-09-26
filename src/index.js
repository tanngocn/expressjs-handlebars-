const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const route = require("./routes");
const app = express();
const port = 3000;
route(app);
app.use(express.static(path.join(__dirname, "public")));

// get value req.body formData
app.use(
  express.urlencoded({
    extended: true,
  })
);
// get value axios, fetch
app.use(express.json());

// HTTP Logger
app.use(morgan("combined"));
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
