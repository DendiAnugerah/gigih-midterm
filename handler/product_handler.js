const ProductService = require("../service/product_service");

exports.createProduct = async (req, res) => {
  try {
    const videoId = req.params.videoId;

    const productService = new ProductService();

    const product = await productService.createProduct(req.body, videoId);

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getListProduct = async (req, res) => {
  try {
    const videoId = req.params.videoId;

    const productService = new ProductService();

    const products = await productService.getListProduct(videoId);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
