import { useParams } from 'react-router-dom';
import data from '../HomePageData.json';
import './ProjectDetails.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = data.portfolioData.portfolioItems[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="project-details">
      <div className="container">
        <div className="project-header">
          <h1 className="project-title">{project.title}</h1>
          <p className="project-subtitle">{project.subTitle}</p>
        </div>

        <div className="project-content">
          <div className="project-image-section">
            <Slider {...sliderSettings}>
              {project.images.map((image, index) => (
                <div key={index} className="slider-image">
                  <img src={image} alt={`${project.title} - ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>

          <div className="project-info-section">
            <div className="project-description">
              <h2>About the Project</h2>
              <p>{project.details.description}</p>
            </div>

            <div className="project-technologies">
              <h2>Technologies Used</h2>
              <div className="tech-tags">
                {project.details.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-features">
              <h2>Key Features</h2>
              <ul>
                {project.details.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-links">
              <a href={project.details.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View on GitHub
              </a>
              <a href={project.details.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails; 