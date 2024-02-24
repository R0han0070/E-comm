const express = require("express");
const {
  getAllproducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(isAuthenticatedUser,getAllproducts);
router.route("/product/new").post(isAuthenticatedUser, createProduct);
router
  .route("/product/:id")
  .put(isAuthenticatedUser,updateProduct)
  .delete(isAuthenticatedUser,deleteProduct)
  .get(getProductDetails);

module.exports = router;
