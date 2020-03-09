import React from 'react';
import { ReactComponent as AvatarHead } from '../../assets/avatar-head.svg';
import { ReactComponent as AvatarBody } from '../../assets/avatar-body.svg';
import { ReactComponent as DropdownAccountIcon } from '../../assets/dropdown-account.svg';
import './sign-in-display.styles.scss';

const SignInDisplay = () => {
  return (
    <article className='sign-in-display-container'>
      <figure className='avatar-icon-container'>
        <AvatarHead className='avatar-head'/>
        <AvatarBody className='avatar-body'/>
      </figure>
      <div className='sign-in-info-container'>
        <span className='sign-in-visitor-name'>OLÁ, VISIT
        <span className='lowercase-letter'>ANTE</span></span>
        <span className='sign-in-visitor-account'>MINHA CONT
        <span className='lowercase-letter'>A</span></span>
      </div>
      <figure className='sign-in-dropdown-container'>
        <DropdownAccountIcon className='sign-in-dropdown-icon'/>
      </figure>
    </article>
  )
};

export default SignInDisplay;