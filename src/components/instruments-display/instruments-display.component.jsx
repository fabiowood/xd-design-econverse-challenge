import React, { useState } from 'react';
import { ReactComponent as CollectionHighlight } from '../../assets/percussion-line.svg';
import './instruments-display.styles.scss';

// Component Dependencies:

import InstrumentsCollection from '../instruments-collection/instruments-collection.component';

const InstrumentsDisplay = () => {
  const [instrumentOption, setInstrumentOption] = useState('Teclas');
  const [instrumentsToDisplay] = [instrumentOption];
  
  return (
    <section className='instruments-display-container'>
      <div className='instruments-display-title-container'>
        <h3 className='instruments-display-title'>Instrumentos<span className='instruments-display-highlight-text'>Destaque</span></h3>
        <p className='instruments-display-main-text'>It is a long established fact that a reader will be distracted by the readable</p>
      </div>
      <nav className='instruments-nav-bar-container'>
        <ul>
          <li onClick={ () => setInstrumentOption('Cordas')}>Cordas</li>
          <li onClick={ () => setInstrumentOption('Percussão')}>Percussão</li>
          <li onClick={ () => setInstrumentOption('Sopro')}>Sopro</li>
          <li className='instruments-display-keys-item' onClick={() => setInstrumentOption('Teclas')}>Teclas</li>
        <CollectionHighlight className='collection-highlight'/>
        </ul>
      </nav>
      <InstrumentsCollection InstrumentsToDisplay={ instrumentsToDisplay }/>
      <div className='instruments-display-button-container'>
        <a href='#ver-mais' className='instruments-display-button'>Ver Mais</a>
      </div>
    </section>
  )
};

export default InstrumentsDisplay;