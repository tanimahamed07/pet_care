import React from 'react';
import HeroSlider from './HeroSlider';
import ServicesSection from './ServicesSection';

import VetsSection from './VetsSection';
import CustomerReview from './CustomerReview';
import Banner from './Banner';
import TopRatedService from './TopRatedService';
import PetCare from './PetCare';
import Offer from './Offer';


const HomePage = () => {
        
    return (
        <div>
            <Banner/>
            <TopRatedService></TopRatedService>
            <Offer></Offer>
            <PetCare></PetCare>
            <VetsSection/>
            <CustomerReview/>
        </div>
    );
};

export default HomePage;