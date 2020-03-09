import React from 'react';
import './news-banner.styles.scss';

const NewsBanner = () => {
  return (
    <section className='news-banner-container'>
      <article className='news-banner-section left-background'>
        <div className='news-banner-first-block'>
          <p className='first-block-text'>Novidades</p>
          <figure className='first-block-image'></figure>
        </div>
        <h2 className='news-banner-second-block'><span className='audio-text'>Áudio</span> Profissional</h2>
        <div className='news-banner-third-block'>
         <a href='#confira' className='news-banner-check-button'>Confira</a>
        </div>
      </article>
      <article className='news-banner-section right-background'>
        <div className='news-banner-first-block'>
          <p className='first-block-text'>Novidades</p>
          <figure className='first-block-image'></figure>
        </div>
        <h2 className='news-banner-second-block'><span className='instruments-text'>Instrument</span>os Musicais</h2>
        <div className='news-banner-third-block'>
         <a href='#confira' className='news-banner-check-button'>Confira</a>
        </div>
      </article>
    </section>
  )
};

export default NewsBanner;
