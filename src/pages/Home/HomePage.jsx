import React from 'react';
import HeroSlider from './HeroSlider';
import ServicesSection from './ServicesSection';
import TipsSection from './TipsSection';
import VetsSection from './VetsSection';


const HomePage = () => {
        
    return (
        <div>
            <HeroSlider/>
            <ServicesSection/>
            <TipsSection/>
            <VetsSection/>
        </div>
    );
};

export default HomePage;