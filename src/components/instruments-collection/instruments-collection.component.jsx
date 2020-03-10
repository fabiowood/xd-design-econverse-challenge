import React from 'react';
import './instruments-collection.styles.scss';
import { PRODUCTS_NINJA_SOM } from '../../products/products-ninjasom';

// Component Dependencies:

import InstrumentsCollectionItem from '../instruments-collection-item/instruments-collection-item.component';

const findInstrumentsToDisplay = (allInstruments, InstrumentsToDisplay) => {
  let selectedInstruments = [];
  allInstruments.forEach((item) => {
    let categoryOptions = item.categories;
    if(categoryOptions.some(category => category.toLowerCase().includes(InstrumentsToDisplay.toLowerCase()))) {
      selectedInstruments.push(item);
    }
  })
  return selectedInstruments;
};

const InstrumentsCollection = ({ InstrumentsToDisplay }) => {
  const allInstruments = PRODUCTS_NINJA_SOM;
  const selectedInstruments = findInstrumentsToDisplay(allInstruments, InstrumentsToDisplay);
  return (
    <section className='instruments-collection-container'>
      <article className='instruments-collection-items'>
        {
          selectedInstruments.length > 0 ?

          selectedInstruments.map((instrument) => <InstrumentsCollectionItem key={instrument.productId} instrument={instrument} />).filter((item, index) => index < 8)
          :
          <p className='instruments-collection-error-message'>Não há itens disponíveis nesta seção!</p>
        }
      </article>
    </section>
  )
};

export default InstrumentsCollection;