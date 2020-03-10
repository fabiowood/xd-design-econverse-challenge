import React from 'react';
import { ReactComponent as AboutUsLeftArrow } from '../../assets/about-us-left-arrow.svg';
import { ReactComponent as AboutUsRightArrow } from '../../assets/about-us-right-arrow.svg';
import { ReactComponent as AboutUsPeopleImage } from '../../assets/about-us-people-photo.svg';
import './about-us.styles.scss';

const AboutUs = () => {
  return (
    <section className='about-us-display-container'>
      <article className='about-us-display-title-container'>
        <h3 className='about-us-display-title'>s<span className='lowercase-letter'>obre nós</span></h3>
        <p className='about-us-display-main-text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. </p>
      </article>
      <article className='about-us-people-display-container people-background'>
        <AboutUsLeftArrow className='about-us-left-arrow'/>
        <div className='about-us-people-display-target-width'>
          <AboutUsPeopleImage className='about-us-people-image'/>
          <div className='about-us-people-title'>
            <p className='about-us-people-name'>Felipe Salmim</p>
            <p className='about-us-people-occupation'>Designer</p>
          </div>
          <div className='about-us-people-presentation'>
            <p className='about-us-people-summary'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’</p>
          </div>
        </div>
        <AboutUsRightArrow className='about-us-right-arrow'/>
      </article>
    </section>
  )
};

export default AboutUs;