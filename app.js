const express = require("express");
const cors = require("cors"); // to specify on which server / domain api should live
const bodyParser = require("body-parser"); // for body request
const cookieParser = require("cookie-parser"); // for




const { getdate } = require("./date");


const app = express();
const items = ["buy food", "cook food", "eat food"];
const workItems = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  const day = getdate();
  res.render("lists", {
    listTitle: "Today Lists",
    kindofday: day,
    newlistItems: items,
  });
  console.log("day", day);
});

app.post("/", (req, res) => {
  var item = req.body.newItem;

  if (req.body.list === "work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
  console.log(item);
});
app.get("/work", (req, res) => {
  const day = getdate();

  res.render("lists", {
    listTitle: "work",
    newlistItems: workItems,
    kindofday: day,
  });
});

app.listen(process.env.port || "5000", () => {
  console.log("listening on port 5000");
});
