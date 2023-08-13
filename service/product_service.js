const ProductRepository = require("../domain/product/product_repository");

class ProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  async createProduct(product, videoId) {
    try {
      return await this.productRepository.createProduct({
        link: product.link,
        imageUrl: product.imageUrl,
        title: product.title,
        price: product.price,
        videoId: videoId,
      });
    } catch (error) {
      throw error;
    }
  }

  async getListProduct(videoId) {
    try {
      return await this.productRepository.getListProduct(videoId);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductService;
