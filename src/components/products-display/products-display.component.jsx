import React from 'react';
import { ReactComponent as ProductsDisplayLeftArrow } from '../../assets/left-arrow-products-display.svg';
import { ReactComponent as ProductsDisplayRightArrow } from '../../assets/right-arrow-products-display.svg';
import './products-display.styles.scss';

// Component Dependencies:

import ProductsCollection from '../products-collection/products-collection.component';

const ProductsDisplay = () => {  
  return (
    <section className='products-display-container'>
      <div className='products-display-title-container'>
        <h3 className='products-display-title'>Produtos em<span className='products-display-highlight-text'>Destaque</span></h3>
        <p className='products-display-main-text'>It is a long established fact that a reader will be distracted by the readable</p>
      </div>
      <ProductsDisplayLeftArrow className='products-display-left-arrow'/>
      <ProductsCollection />
      <ProductsDisplayRightArrow className='products-display-right-arrow' />
      <div className='products-display-button-container'>
        <a href='#ver-mais' className='products-display-button'>Ver Mais</a>
      </div>
    </section>
  )
};

export default ProductsDisplay;