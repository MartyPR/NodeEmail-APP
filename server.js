const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;

//!set engine
app.set("view engine", "ejs");
//! serrver static assets
app.use(express.static("public"));

//!pass the data from form;
app.use(express.urlencoded({ extended: false }));

//route to render email form
app.get("/", (req, res) => {
  res.render('email-form');
});

app.listen(PORT, console.log(`The server is running ${PORT}`));
