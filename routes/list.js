const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const addData = require("./add");

const router = express.Router();

router.get("/", (req, res, next) => {
  const addresses = addData.addresses;
  res.render("list", {
    addr: addresses,
    pageTitle: "IP Addresses",
    path: "/",
    hasAddresses: addresses.length > 0,
    activeShop: true, 
    productsCSS: true
  });
});
module.exports = router; 