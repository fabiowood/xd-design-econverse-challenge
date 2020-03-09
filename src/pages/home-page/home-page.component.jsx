import React, { Fragment } from 'react';
import './home-page.styles.scss';

// Component Dependencies:

import MainBanner from '../../components/main-banner/main-banner.component';
import CollectionBoxes from '../../components/collection-boxes/collection-boxes.component';
import NewsBanner from '../../components/news-banner/news-banner.component';
import InstrumentsDisplay from '../../components/instruments-display/instruments-display.component';
import BestEquipmentsBanner from '../../components/best-equipments-banner/best-equipments-banner.component';
import ProductsDisplay from '../../components/products-display/products-display.component';
import BestBrandsBanner from '../../components/best-brands-banner/best-brands-banner.component';
import FollowUsBanner from '../../components/follow-us-banner/follow-us-banner.component';
import AboutUs from '../../components/about-us/about-us.component';

const HomePage = () => {
  return (
    <Fragment>
      <MainBanner />
      <CollectionBoxes />
      <NewsBanner />
      <InstrumentsDisplay />
      <BestEquipmentsBanner />
      <ProductsDisplay />
      <BestBrandsBanner />
      <FollowUsBanner />
      <AboutUs />
    </Fragment>
  )
};

export default HomePage;