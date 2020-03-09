import React from 'react';
import { ReactComponent as BannerRightArrow } from '../../assets/banner-right-arrow.svg';
import { ReactComponent as ElipseNoBackground } from '../../assets/elipse-no-background.svg';
import { ReactComponent as ElipseWithBackground } from '../../assets/elipse-with-background.svg';
import './main-banner.styles.scss';

const MainBanner = () => {
  return (
    <section className='main-banner-container'>
      <article className='main-banner-headers'>
          <h4 className='main-text-products'>Novos Produtos</h4>
          <h1 className='main-text-instruments'>Instrumentos Profissionais</h1>
      </article>
      <article className='main-banner-check-button-container'>
        <a href='#confira' className='main-banner-check-button'>Confira</a>
        <figure className='main-banner-check-button-underline'></figure>
      </article>
      <BannerRightArrow className='banner-right-arrow'/>
      <figure class='main-banner-elipses-container'>
        <ElipseNoBackground />
        <ElipseNoBackground />
        <ElipseWithBackground />
        <ElipseNoBackground />
        <ElipseNoBackground />
      </figure>
    </section>
  )
};

export default MainBanner;