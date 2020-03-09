import React from 'react';
import './products-collection.styles.scss';
import { PRODUCTS_NINJA_SOM } from '../../products/products-ninjasom';

// Component Dependencies:

import InstrumentsCollectionItem from '../instruments-collection-item/instruments-collection-item.component';

const findHighlightProductsToDisplay = (allInstruments) => {
  let highlightedInstruments = [];
  allInstruments.forEach((item) => {
    let highlightOption = item.clusterHighlights;
    if(Object.keys(highlightOption).length > 0) {
      highlightedInstruments.push(item);
    }
  });
  if (highlightedInstruments.length > 0) {
    return highlightedInstruments;
  } else {
    return allInstruments;
  }
};

const ProductsCollection = () => {
  const allInstruments = PRODUCTS_NINJA_SOM;
  const highlightedInstruments = findHighlightProductsToDisplay(allInstruments);
  return (
    <section className='products-collection-container'>
      <div className='products-collection-items'>
        {
          highlightedInstruments.map((instrument) => <InstrumentsCollectionItem key={instrument.productId} instrument={instrument} />).filter((item, index) => index < 4)
        }
      </div>
    </section>
  )
};

export default ProductsCollection;