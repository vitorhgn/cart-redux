import React, { Component } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { connect } from "react-redux";

import Axios from "axios";

import { formatPrice } from "../../util/format";

import { ProductList } from "./styles";
import * as CartActions from "../../store/modules/cart/action";
import { bindActionCreators } from "redux";

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await Axios.get("http://localhost:3333/list");

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleAppProduct = (product) => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.url} alt={product.name} />
            <strong>{product.name}</strong>
            <span>{product.priceFormatted}</span>
            <button
              type="button"
              onClick={() => this.handleAppProduct(product)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" />{" "}
                {amount[product.id] || 0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
