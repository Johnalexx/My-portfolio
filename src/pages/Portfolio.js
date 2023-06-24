import React from 'react'
import HeroSection from '../components/HeroSection';
import ContactSection from '../components/ContactSection';
import { portfolioObjOne, portfolioObjTwo } from '../components/pages/Portfolio/PortfolioData';


function Portfolio() {
    return (
        <>
           <HeroSection {...portfolioObjOne} />
           <ContactSection {...portfolioObjTwo} />
        </>
    )
}

export default Portfolio
