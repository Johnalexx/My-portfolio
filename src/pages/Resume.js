import React from 'react'
import HeroSection from '../components/HeroSection';
import { resumeObjOne, resumeObjTwo } from '../components/pages/Resume/ResumeData';

function Resume() {
    return (
        <>
           <HeroSection {...resumeObjOne} />
           <HeroSection {...resumeObjTwo} />
        </>
    )
}

export default Resume
