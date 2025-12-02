import React from 'react';
import HeroSlider from './HeroSlider';
import ServicesSection from './ServicesSection';
import TipsSection from './TipsSection';
import VetsSection from './VetsSection';
import CustomerReview from './CustomerReview';
import Banner from './Banner';


const HomePage = () => {
        
    return (
        <div>
            <Banner/>
            <ServicesSection/>
            <TipsSection/>
            <VetsSection/>
            <CustomerReview/>
        </div>
    );
};

export default HomePage;