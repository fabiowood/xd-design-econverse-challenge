import React from 'react';
import './best-equipments-banner.styles.scss';

const BestEquipmentsBanner = () => {
  return (
    <section className='banner-container'>
      <h2 className='banner-first-block'><span className='audio-text'>os melhores equipamentos para sua produção musical</span></h2>
      <div className='banner-second-block'>
        <a href='#confira' className='banner-check-button'>Confira</a>
      </div>
    </section>
  )
};

export default BestEquipmentsBanner;