import React from 'react';
import { ReactComponent as ProductsDisplayLeftArrow } from '../../assets/left-arrow-products-display.svg';
import { ReactComponent as ProductsDisplayRightArrow } from '../../assets/right-arrow-products-display.svg';
import { ReactComponent as BrandDisplayAKG } from '../../assets/brand-display-akg.svg';
import { ReactComponent as BrandDisplayROLAND } from '../../assets/brand-display-roland.svg';
import { ReactComponent as BrandDisplayBOSS } from '../../assets/brand-display-boss.svg';
import { ReactComponent as BrandDisplaySHURE } from '../../assets/brand-display-shure.svg';
import './best-brands-banner.styles.scss';

const BestBrandsBanner = () => {  
  return (
    <section className='brands-display-container'>
      <div className='brands-display-title-container'>
        <h3 className='brands-display-title'>As Melhores<span className='brands-display-highlight-text'>Marcas</span></h3>
        <p className='brands-display-main-text'>It is a long established fact that a reader will be distracted by the readable</p>
      </div>
      <ProductsDisplayLeftArrow className='brands-display-left-arrow'/>
      <div className='brands-logos-display-container'>
        <a href='https://br.akg.com/' target='_blank' rel='noopener noreferrer'><BrandDisplayAKG className='brand-display-akg'></BrandDisplayAKG></a>
        <a href='https://www.roland.com/br/' target='_blank' rel='noopener noreferrer'><BrandDisplayROLAND className='brand-display-roland'/></a>
        <a href='https://www.boss.info/br/' target='_blank' rel='noopener noreferrer'><BrandDisplayBOSS className='brand-display-boss'/></a>
        <a href='https://www.shure.com/pt-BR' target='_blank' rel='noopener noreferrer'><BrandDisplaySHURE className='brand-display-shure'/></a>
      </div>
      <ProductsDisplayRightArrow className='brands-display-right-arrow' />
    </section>
  )
};

export default BestBrandsBanner;