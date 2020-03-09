import React from 'react';
import './instruments-collection-item.styles.scss';

const findInstrumentImage = (instrument) => {
  let instrumentImage = '';
  for (let key in instrument) {
    if (key === 'items') {
      instrumentImage = instrument[key][0].images[0].imageUrl
    }
  }
  return instrumentImage;
}

const findInstrumentPrice = (instrument) => {
  let instrumentPrice = 0.00;
  for (let key in instrument) {
    if (key === 'items') {
      instrumentPrice = instrument[key][0].sellers[0].commertialOffer.Price
    }
  }
  return instrumentPrice;
}

const InstrumentsCollectionItem = ({ instrument }) => {
  const instrumentImage = findInstrumentImage(instrument);
  const instrumentPrice = findInstrumentPrice(instrument);
  const { productTitle } = instrument;
  return (
    <article className='instruments-collection-item'>
      <div
        className="collection-item-image"
        style={{ backgroundImage: `url(${instrumentImage})` }}
      />
      <div className="collection-item-footer">
        <p className='collection-item-name'>{productTitle}</p>
        <p className='collection-item-text'>Many desktop publishing packages and web page editors now Many desktop publishing…</p>
        <p className='collection-item-price'>R${instrumentPrice.toLocaleString('pt-br', {minimumFractionDigits: 2})}</p> 
      </div>
    </article>
  )
};

export default InstrumentsCollectionItem;