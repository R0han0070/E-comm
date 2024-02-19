const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");

//Create product --> Admin

exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// Get Single Product OR Product details

exports.getProductDetails = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product is not Found", 404));

    // return res.status(500).json({
    //   success: false,
    //   message: "Product not found",
    // });
  }

  res.status(200).json({
    success: true,
    product,
  });
};

//Get All products
exports.getAllproducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({ success: true, products });
};

//Update product --> Admin
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
};

//Delete product

exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product deleted Successfully",
  });
};
