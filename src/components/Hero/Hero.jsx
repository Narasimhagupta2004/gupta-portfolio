import PropTypes from 'prop-types';
import './Hero.scss';
import parser from 'html-react-parser';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect } from 'react';

const Hero = ({ data }) => {
  const { subTitle, designation, title, bgImgLink, imgLink } = data;

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const heroElements = document.querySelector('.st-hero-wrap .st-hero-img');
      if (heroElements) {
        heroElements.style.right = `${scrollValue * -0.1}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="st-hero-wrap">
      <div className="st-height-b80 st-height-lg-b80"></div>
      <div
        className="st-hero st-style1 st-bg"
        style={{ backgroundImage: `url(${bgImgLink})` }}
      >
        <div className="container">
          <div className="st-hero-content-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="st-hero-text">
              <h3 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                {subTitle}
              </h3>
              <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                {parser(title)}
              </h1>
              <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                {designation}
              </h2>
              <div
                className="st-hero-btn"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <ScrollLink className="st-btn st-style1 st-color1" to="contact">
                  Hire Me
                </ScrollLink>
              </div>
            </div>
            <div className="st-hero-img" data-aos="fade-left" data-aos-duration="800" data-aos-delay="600">
              <img src={imgLink} alt="Gupta" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  data: PropTypes.object,
};

export default Hero;
