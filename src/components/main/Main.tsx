import React from 'react';
import  {CitySection}  from './citySection/CitySection';
import {OfferSection} from './offerSection/OfferSection';
import {OffersSection} from './offersSection/OffersSection';

export const Main: React.FC = () => {
  return (
    <main className='main'>
      <CitySection />
      <OfferSection />
      <OffersSection />
    </main>
  )
}