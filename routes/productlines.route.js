const productlinesController = require("../controllers/productlines.controller");
const productLinesUri = "/productlines/";
const productLineUri = "/productlines/:id/";
var express = require("express");

var router = express.Router();

router
  .get(productLinesUri, productlinesController.getProductLines)
  .get(productLineUri, productlinesController.getProductLine)
  .post(productLinesUri, productlinesController.postProductLines);

// add the product line rounter to export
//
module.exports = router;
