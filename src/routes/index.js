const express = require("express");
const router = express.Router();

//routes
router.get("/", (req, res) => {
  res.render("index.html", { title: "Web node.js" });
});

router.get("/contact", (req, res) => {
  res.render("contact.html", { title: "Contacts" });
});



module.exports = router;
