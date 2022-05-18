const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const addresses = [];

router.get("/add-address", (req, res, next) => {
  addresses.push({ip: req.socket.remoteAddress})
  res.redirect("/");
});

exports.routes = router;
exports.addresses = addresses;
