import React from 'react';
import { ReactComponent as PhoneIconBorder } from '../../assets/phone-icon-border.svg';
import { ReactComponent as PhoneIcon } from '../../assets/phone-icon.svg';
import './general-info.styles.scss';

// Component Dependencies:

import LogoDisplay from '../logo-display/logo-display.component';
import SearchBox from '../search-box/search-box.component';
import SignInDisplay from '../sign-in-display/sign-in-display.component';
import CartDisplay from '../cart-display/cart-display.component';

const GeneralInfo = () => {
  return (
    <section className='general-info-container'>
      <LogoDisplay />
      <SearchBox />
      <article className='phone-contact-container'>
        <figure className='phone-icon-container'>
          <PhoneIconBorder className='phone-icon-border'/>
          <PhoneIcon className='phone-icon'/>
        </figure>
        <div className='phone-contact-number-standard'>
          <span className='phone-contact-number'>(11) 99999</span> 
          <span className='phone-contact-number-complement'>-9999</span>
        </div>
      </article>
      <SignInDisplay />
      <CartDisplay />
    </section>
  )
};

export default GeneralInfo;