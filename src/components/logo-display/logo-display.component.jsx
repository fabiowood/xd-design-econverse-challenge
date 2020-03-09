import React from 'react';
import { ReactComponent as LogoLetterN } from '../../assets/logo-letter-n.svg';
import { ReactComponent as LogoLetterI } from '../../assets/logo-letter-i.svg';
import { ReactComponent as LogoLetterSecondN } from '../../assets/logo-letter-second-n.svg';
import { ReactComponent as LogoLetterJ } from '../../assets/logo-letter-j.svg';
import { ReactComponent as LogoLetterA } from '../../assets/logo-letter-a.svg';
import { ReactComponent as LogoLetterSTop } from '../../assets/logo-letter-s-top.svg';
import { ReactComponent as LogoLetterSBottom } from '../../assets/logo-letter-s-bottom.svg';
import { ReactComponent as LogoLetterOLeft } from '../../assets/logo-letter-o-left.svg';
import { ReactComponent as LogoLetterORight } from '../../assets/logo-letter-o-right.svg';
import { ReactComponent as LogoLetterM } from '../../assets/logo-letter-m.svg';

import './logo-display.styles.scss';

const LogoDisplay = () => {
  return (
    <figure className='logo-display'>
      <LogoLetterN />
      <LogoLetterI />
      <LogoLetterSecondN />
      <LogoLetterJ />
      <LogoLetterA className='logo-letter-a'/>
      <LogoLetterSTop className='logo-letter-s-top'/>
      <LogoLetterSBottom className='logo-letter-s-bottom'/>
      <LogoLetterOLeft className='logo-letter-o-left'/>
      <LogoLetterORight className='logo-letter-o-right'/>
      <LogoLetterM className='logo-letter-m'/>
    </figure>
  ) 
};

export default LogoDisplay;