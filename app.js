const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Campground = require("./models/campground");

main().catch((err) => {
  console.log("ON NO MONGO CONNECTION ERROR");
  console.log(err);
});

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp");
  console.log("Database connected");
}

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/campgrounds", async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
});

app.get("/campgrounds/:id", async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  res.render("campgrounds/show", { campground });
});

app.listen(3000, () => {
  console.log("APP LISTENING ON PORT 3000");
});
