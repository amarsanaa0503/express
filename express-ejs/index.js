const { Router } = require("express");
const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false });

const { quotes } = require("./data.json");

app.use("/quotes", (req, res) => {
  res.render("quotes", { title: "Quote lists", quotes });
});

app.get("/quote/:id", (req, res) => {
  res.render("quote", {
    quote: quotes[req.params.id].quote,
    source: quotes[req.params.id].source,
  });
});

app.get("/", (req, res) => {
  res.render("index", { name: "Amarsanaa" });
});

app.get("/json", (req, res) => {
  res.json({ name: "Amarsanaa", email: "amarsanaa0503@gmail.com" });
});

app.get("/", (req, res) => {
  res.redirect("/quotes");
});

app.get("*", (req, res, next) => {
  res.render("404", { error: "404 NOT FOUND!" });
});

app.listen(3002);
