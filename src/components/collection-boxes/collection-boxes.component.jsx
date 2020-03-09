import React from 'react';
import { ReactComponent as Guitars } from '../../assets/collection-box-item-guitar.svg';
import Microphones from '../../assets/collection-box-item-microphone.png';
import SoundTable from '../../assets/collection-box-item-sound-table.png';
import { ReactComponent as Keyboards } from '../../assets/collection-box-item-keyboards.svg';
import { ReactComponent as AccousticGuitar } from '../../assets/collection-box-item-accoustic-guitar.svg';
import { ReactComponent as Drums } from '../../assets/collection-box-item-drums.svg';
import './collection-boxes.styles.scss';

// Component Dependencies:

import CollectionBoxItem from '../collection-box-item/collection-box-item.component';

const CollectionBoxes = () => {
  return (
    <section className='collection-boxes'>
      <CollectionBoxItem CollectionBoxImage={ < Guitars/> } CollectionBoxTitle={'Guitarras'} isSVG={ true }/>
      <CollectionBoxItem CollectionBoxImage={ Microphones } CollectionBoxTitle={'Microfones'} isSVG={ false }/>
      <CollectionBoxItem CollectionBoxImage={ SoundTable } CollectionBoxTitle={'Mesa de Som'} isSVG={ false }/>
      <CollectionBoxItem CollectionBoxImage={ < Keyboards/> } CollectionBoxTitle={'Teclados'} isSVG={ true }/>
      <CollectionBoxItem CollectionBoxImage={ < AccousticGuitar/> } CollectionBoxTitle={'Violão'} isSVG={ true }/>
      <CollectionBoxItem CollectionBoxImage={ < Drums/> } CollectionBoxTitle={'Baterias'} isSVG={ true }/>
    </section>
  )
};

export default CollectionBoxes;