const express = require("express");
const app = express();
const path = require("path");
// setting definimos variable global
app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
//midlewares funciones que se ejecutan amtes de que sean procesadas (autenticacion)

//routes require
app.use(require("./routes/index"));

//static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  console.log("server is on port", app.get("port"));
});
