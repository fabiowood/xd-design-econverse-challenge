import React from 'react';
import { ReactComponent as FollowUsPhotoOne } from '../../assets/follow-us-photo-one.svg';
import { ReactComponent as FollowUsPhotoTwo } from '../../assets/follow-us-photo-two.svg';
import { ReactComponent as FollowUsPhotoThree } from '../../assets/follow-us-photo-three.svg';
import { ReactComponent as FollowUsPhotoFour } from '../../assets/follow-us-photo-four.svg';
import { ReactComponent as FollowUsPhotoFive } from '../../assets/follow-us-photo-five.svg';
import './follow-us-banner.styles.scss';

const FollowUsBanner = () => {  
  return (
    <section className='follow-us-display-container'>
      <article className='follow-us-display-title-container'>
        <h3 className='follow-us-display-title'>Follow Us</h3>
        <p className='follow-us-display-main-text'>
          <a href='https://www.instagram.com/ninjasom/' target='_blank' rel='noopener noreferrer'>@ninjasom
          </a>
        </p>
      </article>
      <a href='https://www.instagram.com/ninjasom/' target='_blank' rel='noopener noreferrer'>
        <article className='follow-us-photos-display-container'>
            <FollowUsPhotoOne className='follow-us-photo-one' />
            <FollowUsPhotoTwo className='follow-us-other-photos' />
            <FollowUsPhotoThree className='follow-us-other-photos' />
            <FollowUsPhotoFour className='follow-us-other-photos' />
            <FollowUsPhotoFive className='follow-us-other-photos' />
        </article>
      </a>
    </section>
  )
};

export default FollowUsBanner;