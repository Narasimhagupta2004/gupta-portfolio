import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Portfolio from '../components/Portfolio/Portfolio';
import Certifications from '../components/Certifications/Certifications';
import Contact from '../components/Contact/Contact';
import './HomePage.scss';
import data from '../HomePageData.json';

const HomePage = () => {
  // Ensure data exists before rendering components
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className="home-page">
      {data.heroData && <Hero data={data.heroData} />}
      {data.aboutData && <About data={data.aboutData} />}
      {data.skillData && <Skills data={data.skillData} />}
      {data.portfolioData && <Portfolio data={data.portfolioData} />}
      {data.certificationsData && <Certifications data={data.certificationsData} />}
      {data.contactData && <Contact data={data.contactData} />}
    </main>
  );
};

export default HomePage; 