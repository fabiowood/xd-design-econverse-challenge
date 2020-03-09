import React from 'react';
import { ReactComponent as CartIcon } from '../../assets/cart-icon.svg';
import './cart-display.styles.scss';

const CartDisplay = () => {
  return (
      <article className='cart-display-major-container'>
        <div className='cart-display-minor-container'>
          <figure className='cart-icon-container'>
            <CartIcon />
          </figure>
          <div className='cart-info-container'>
            <p className='cart-name'>Seu <span className='lowercase-letter'>carrinho</span></p>
            <p className='cart-items-account'>0 <span className='lowercase-letter'>item (s)</span></p>
          </div>
        </div>
      </article>
  )
};

export default CartDisplay;