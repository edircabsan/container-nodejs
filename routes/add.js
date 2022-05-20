const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const addresses = [];

router.get("/add-address", (req, res, next) => {
  const date_ob = new Date()
  const date = ("0" + date_ob.getDate()).slice(-2);
  const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  const year = date_ob.getFullYear();
  const hours = ("0" + date_ob.getHours()).slice(-2);
  const minutes = ("0" + date_ob.getMinutes()).slice(-2);
  const seconds = ("0" + date_ob.getSeconds()).slice(-2);
  const datetime = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + ("0" + seconds).slice(-2)
  addresses.push({ip: req.socket.remoteAddress, dt: datetime});
  res.redirect("/");
});

exports.routes = router;
exports.addresses = addresses; 
