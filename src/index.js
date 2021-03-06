const express = require("express");
const app = express();
const path = require("path");
// setting definimos variable global
const PORT = process.env.PORT || 3000;
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
//midlewares funciones que se ejecutan amtes de que sean procesadas (autenticacion)

//routes require
app.use(require("./routes/index"));

//static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`server in port ${PORT}`);
});
