import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Cart } from './styles';
import { MdShoppingBasket } from 'react-icons/md'

import { connect } from 'react-redux';

function Header({ cartSize }) {

  function exibirItemCart() {
    if(cartSize === 0){
      return `Seu carrinho está vazio`
    }
    if(cartSize === 1){
      return `${cartSize} item adicionado`
    }else{
      return `${cartSize} itens adicionados`
    }
  }

  return (
    <Container>
        <Link to="/">
            <h1>LOGO</h1>
        </Link>
        <div>
        <Cart to="/cart">
            <div>
                <strong>Meu Carrinho</strong>
                <span>{exibirItemCart()}</span>
            </div>
            <MdShoppingBasket size={36} color="#fff"/>  
        </Cart>
        </div>
    </Container>
  );
}

export default connect( state=> ({
  cartSize: state.cart.length,
}))(Header);