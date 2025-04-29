import data from '../HomePageData.json';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skill from '../components/Skill/Skill';
import Resume from '../components/Resume/ResumeSection';
import Contact from "../components/Contact/Contact";
import PortfolioSection from '../components/Protfolio/PortfolioSection';

const Home = () => {
  const { heroData, aboutData, skillData, portfolioData, resumeData, contactData, socialData } = data;
  return (
    <>
      <Hero data={heroData} socialData={socialData} data-aos="fade-right" />
      <About data={aboutData} data-aos="fade-right" />
      <Skill data={skillData} data-aos="fade-right" />
      <Resume data={resumeData} />
      <PortfolioSection data={portfolioData} data-aos="fade-right" />
      <Contact data={contactData} socialData={socialData} data-aos="fade-right" />
    </>
  )
}

export default Home;
