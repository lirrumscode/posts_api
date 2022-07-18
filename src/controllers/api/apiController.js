require("dotenv").config();
const cors = require("cors");
const express = require("express");

const routes = require("../../routes/routesController");
const { api } = require("../homeController");
api.set("view engine", "hbs");
api.use(express.static(__dirname + "/views"));

api.use(cors());
api.use(express.json());
api.use("/api/posts", routes);

api.get("/", (req, res) => {
  res.render("home");
});

api.get("*", (req, res) => {
  res.json({ code: 404, results: "router page not found" });
});
api.listen(process.env.PORT_API);
