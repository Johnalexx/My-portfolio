import React from 'react'
import HeroSection from '../components/HeroSection';
import ContactSection from '../components/ContactSection';
import { contactObjOne, contactObjTwo } from '../components/pages/Contact/ContactData';


function Contact() {
    return (
        <>
           <HeroSection {...contactObjOne} />
           <ContactSection {...contactObjTwo} />
        </>
    )
}

export default Contact
