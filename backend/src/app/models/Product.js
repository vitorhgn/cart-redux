import Sequelize, { Model } from "sequelize";

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        price: Sequelize.INTEGER,
        url: Sequelize.STRING,
      },
      {
        sequelize
      }
    );
  }
}

export default Product;
