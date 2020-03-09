import React from 'react';
import { ReactComponent as PadlockBorder } from '../../assets/padlock-border.svg';
import { ReactComponent as PadlockCenter } from '../../assets/padlock-center.svg';
import { ReactComponent as HeaderDividingLine } from '../../assets/header-divider-line.svg';
import { ReactComponent as HeaderLeftArrow } from '../../assets/header-left-arrow.svg';
import { ReactComponent as HeaderRightArrow } from '../../assets/header-right-arrow.svg';
import { ReactComponent as TopPercentCircle } from '../../assets/top-percent-circle.svg';
import { ReactComponent as BottomPercentCircle } from '../../assets/bottom-percent-circle.svg';
import { ReactComponent as DividerPercent } from '../../assets/divider-percent-image.svg';
import { ReactComponent as DeliveryTruck } from '../../assets/delivery-truck.svg';
import './header.styles.scss';

// Component Dependencies:

import GeneralInfo from '../general-info/general-info.component';

const Header = () => {
  return (
    <header className='header'>
      <section className='header-first-container'>
        <article className='header-first-container-box'>
          <div>
            <a href='#compra-segura' className='padlock-image'>
              <PadlockBorder className='padlock-border'/>
              <PadlockCenter className='padlock-center'/>
            </a>
          </div>
          <p className='header-option-title'>
            <span className='buy-title'>Compra</span> 
            <span>100% Segur</span> 
            <span className='lowercase-letter'>a</span> 
          </p>
          <div>
            <HeaderDividingLine className='header-dividing-line'/>  
          </div>
        </article>
        <article className='header-first-container-box'>
          <div>
            <a href='#troca-gratis' className='arrows-image'>
              <HeaderLeftArrow className='left-arrow'/>
              <HeaderRightArrow className='right-arrow'/>
            </a>
          </div>
          <p className='header-option-title'>
            <span className='trade-title'>1ª Troca g</span> 
            <span className='lowercase-letter'>rátis</span> 
          </p>
          <div>
            <HeaderDividingLine className='header-dividing-line'/>  
          </div>
        </article>
        <article className='header-first-container-box'>
          <div>
            <a href='#parcelamento-sem-juros' className='percentual-image'>
              <TopPercentCircle className='top-percent-circle'/>
              <DividerPercent className='divider-percent-image'/>
              <BottomPercentCircle className='bottom-percent-circle'/>
            </a>
          </div>
          <p className='header-option-title'>
            <span className='no-interests-title'>5x sem Jur</span> 
            <span className='lowercase-letter'>os</span> 
          </p>
          <div>
            <HeaderDividingLine className='header-dividing-line'/>  
          </div>
        </article>
        <article className='header-first-container-box'>
          <div>
            <a href='#entrega-brasil' className='delivery-truck'>
              <DeliveryTruck/>
            </a>
          </div>
          <p className='final-option-title'>
            <span className='delivery-title'>Entregas em Todo o Bra</span> 
            <span className='lowercase-letter'>sil</span> 
          </p>
        </article>
      </section>
      <GeneralInfo />
    </header>
  )
};

export default Header;