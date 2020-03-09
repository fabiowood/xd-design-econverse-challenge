import React from 'react';
import './collection-box-item.scss';

const CollectionBoxItem = ({ CollectionBoxImage, CollectionBoxTitle, isSVG }) => {
  return (
    <article className='collection-box-item'>
      <figure className='collection-box-image-container'>
        {
          isSVG 
          ?
          <div>{ CollectionBoxImage }</div>
          :
          <img src={ CollectionBoxImage } alt='collection-box' />
        }
      </figure>
      <h5 className='collection-box-title'>{ CollectionBoxTitle }</h5>
    </article>
  )
};

export default CollectionBoxItem;

