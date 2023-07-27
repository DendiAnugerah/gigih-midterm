const product = require("./product_entity");
const uuid = require("uuid");

class ProductRepository {
  async createProduct(payload) {
    try {
      const newProduct = new product({
        id: uuid.v4(),
        link: payload.link,
        title: payload.title,
        price: payload.price,
        videoId: payload.videoId,
      });

      return await newProduct.save();
    } catch (error) {
      throw error;
    }
  }

  async getListProduct(videoId) {
    try {
      const products = product.find({ videoId }, "id link title price").lean();
      return products;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductRepository;
